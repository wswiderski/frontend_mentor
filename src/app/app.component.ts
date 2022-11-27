import { Component } from '@angular/core';
import { Spending } from './model/spending';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  balance: number = 921.48;
  spending: Spending = {
    spendings: [10, 30, 52.36, 31.07, 20, 35, 20],
    increaseProcent: 2.4,
  };
}
