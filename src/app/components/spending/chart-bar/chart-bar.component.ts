import { Component, Input } from '@angular/core';
import { SpendingPerDay } from '../../../model/spending-per-day';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
})
export class ChartBarComponent {
  @Input() spendingPerDay: SpendingPerDay = {} as SpendingPerDay;
}
