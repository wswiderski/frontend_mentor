import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() value: boolean = false;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onToogle() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
