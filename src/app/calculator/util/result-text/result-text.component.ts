import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-text',
  templateUrl: './result-text.component.html',
  styleUrls: ['./result-text.component.css'],
})
export class ResultTextComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() amount: number = 0;
}
