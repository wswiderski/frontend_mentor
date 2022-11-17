import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['../common-layout.css', './number-input.component.css'],
})
export class NumberInputComponent {
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() imgAlt: string = '';
  @Input() value: FormControl = new FormControl();
  @Input() errorMsg: string = '';
  @Output() valueChange = new EventEmitter<FormControl>();

  public onInput() {
    this.valueChange.emit();
  }
}
