import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() text: string = '';

  get color(): string {
    if (this.text === 'NEW!') {
      return '$desaturated-dark-cyan';
    }
    if (this.text === 'FEATURED') {
      return '$very-dark-grayish-cyan';
    }
    return '';
  }
}
