import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css'],
})
export class NumberInputComponent {
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() imgAlt: string = '';
  @Input() value: number = 0;
  @Input() errorMsg: string = '';
  @Output() valueChange = new EventEmitter<number>();

  public onChange() {
    this.valueChange.emit(this.value);
  }
}
