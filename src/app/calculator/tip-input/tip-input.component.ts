import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tip-input',
  templateUrl: './tip-input.component.html',
  styleUrls: ['../common-layout.css', './tip-input.component.css'],
})
export class TipInputComponent {
  @Input() title: string = '';
  @Input() selectedTip: number = 0;
  @Input() customTip = new FormControl('');

  @Output() selectedTipChange = new EventEmitter<number>();
  @Output() customTipChange = new EventEmitter<FormControl>();

  tipOptions: number[] = [5, 10, 15, 20, 25];

  onCustomTipChange() {
    this.customTipChange.emit();
  }

  onCustomTipFocus() {
    this.selectedTipChange.emit(0);
  }

  onSelectedTipChange(value: number) {
    this.selectedTipChange.emit(value);
  }
}
