import { Component, Input } from '@angular/core';
import { Spending } from '../../model/spending';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss'],
})
export class SpendingComponent {
  @Input() spending: Spending = {} as Spending;

  get total(): number {
    let sum = 0;
    this.spending.spendings.forEach((spending) => (sum += spending));
    return sum;
  }

  get percentageIncrease(): string {
    let result = this.spending.increaseProcent >= 0 ? '+' : '-';
    result += `${this.spending.increaseProcent}%`
    return result;
  }
}
