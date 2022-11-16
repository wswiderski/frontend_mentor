import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tip } from '../model/tip';

@Component({
  selector: 'app-tip-input',
  templateUrl: './tip-input.component.html',
  styleUrls: ['../common-layout.css', './tip-input.component.css'],
})
export class TipInputComponent {
  @Input() title: string = '';
  @Input() errorMsg: string = '';
  @Input() tip: Tip = {};

  @Output() tipChange = new EventEmitter<number>();
  @Output() customTipChange = new EventEmitter<number>();

  options: number[] = [5, 10, 15, 20, 25];

  onCustomTipChange(event: Event) {
    this.customTipChange.emit(+(event.target as HTMLInputElement).value);
  }

  onTipChange(value: number) {
    this.tipChange.emit(value);
  }
}
