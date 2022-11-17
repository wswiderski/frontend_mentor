import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./common-layout.css', './calculator.component.css'],
})
export class CalculatorComponent {
  billAmount = new FormControl('', [Validators.required]);
  peopleAmount = new FormControl('', [Validators.required]);
  selectedTip = 0;
  customTip = new FormControl('');

  tipAmountPerPerson = 0;
  totalPerPerson = 0;

  get billAmountError(): string {
    if (this.billAmount.touched || this.billAmount.dirty) {
      if (
        this.billAmount.value === '' ||
        parseFloat(this.billAmount.value) === 0
      ) {
        return "Can't be zero";
      }
      if (this.billAmount.value[this.billAmount.value.length - 1] === '.') {
        return 'Invalid number';
      }
      const numberPart = this.billAmount.value.split('.');
      if (numberPart.length > 1 && numberPart[1].length > 2) {
        return 'Plaese use max two decimal places';
      }
    }
    return '';
  }

  get peopleAmountError(): string {
    if (this.peopleAmount.touched || this.peopleAmount.dirty) {
      if (
        this.peopleAmount.value === '' ||
        parseInt(this.peopleAmount.value) === 0
      ) {
        return "Can't be zero";
      }
    }
    return '';
  }

  public onBillAmountChange() {
    const processed = this.trimToDecimal(this.billAmount.value + '');
    this.billAmount.setValue(processed);
    this.calculateAmount();
  }

  public onCustomTipChange() {
    const processed = this.trimToInteger(this.customTip.value + '');
    this.customTip.setValue(processed);
    this.calculateAmount();
  }

  public onSelectedTipChange(value: number) {
    this.selectedTip = value !== this.selectedTip ? value : 0;
    if (value !== 0) {
      this.customTip = new FormControl('');
    }
    this.calculateAmount();
  }

  public onPeopleAmountChange() {
    const processed = this.trimToInteger(this.peopleAmount.value + '');
    this.peopleAmount.setValue(processed);
    this.calculateAmount();
  }

  public onReset() {
    this.billAmount = new FormControl('', [Validators.required]);
    this.peopleAmount = new FormControl('', [Validators.required]);
    this.selectedTip = 0;
    this.customTip = new FormControl('');
    this.tipAmountPerPerson = 0;
    this.totalPerPerson = 0;
  }

  private calculateAmount() {
    if (this.canCalculate()) {
      const bill = parseFloat(this.billAmount.value);
      const peopleCount = parseInt(this.peopleAmount.value);

      let tip =
        (this.customTip.dirty || this.customTip.touched) && this.customTip.value
          ? parseInt(this.customTip.value)
          : this.selectedTip;
      tip /= 100;
      tip += 1;
      const total = bill * tip;
      this.totalPerPerson = total / peopleCount;
      this.tipAmountPerPerson = (total - bill) / peopleCount;
    } else {
      this.tipAmountPerPerson = 0;
      this.totalPerPerson = 0;
    }
  }

  private canCalculate(): boolean {
    return (
      !this.billAmount.invalid &&
      !this.billAmountError &&
      !this.peopleAmount.invalid &&
      !this.peopleAmountError
    );
  }

  private trimToInteger(value: string): string {
    value = value.replace(/\D/g, '');
    return value.length > 0 ? '' + parseInt(value) : '';
  }

  private trimToDecimal(value: string): string {
    value = value.replace(/,/g, '.');
    value = value.replace(/[^\d.]/g, '');
    const numberParts = value.split('.');
    const lastDot = value[value.length - 1] === '.';
    value = numberParts[0];
    if (lastDot && value.search('.') === value.length - 1) {
      value += '.';
    }
    if (numberParts.length > 1) {
      value += '.';
      for (let i = 1; i < numberParts.length; i++) {
        value += numberParts[i];
      }
    }
    if (value.length > 1 && value[0] === '0') {
      return '' + parseFloat(value);
    }
    return value;
  }
}
