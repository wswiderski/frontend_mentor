import { Component, OnInit } from '@angular/core';
import { Tip } from './model/tip';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./common-layout.css','./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  billAmount: number = 0;
  peopleAmount: number = 0;
  tip: Tip = { customValue: 10 };

  constructor() {}

  ngOnInit(): void {}

  get resetAvailable(): boolean {
    return (
      this.billAmount !== 0 &&
      this.billAmount !== undefined &&
      this.peopleAmount !== 0 &&
      this.peopleAmount !== undefined &&
      ((this.tip.customValue !== undefined && this.tip.customValue !== 0) ||
        (this.tip.selectedValue !== undefined && this.tip.selectedValue !== 0))
    );
  }

  public onReset() {
    this.billAmount = 0;
    this.peopleAmount = 0;
    this.tip = {};
  }
}
