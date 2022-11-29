import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pageViews: number = 100;
  yearly: boolean = false;

  get price(): number {
    const fullPrice = (this.pageViews * 16) / 100;
    return this.yearly ? 0.75 * fullPrice : fullPrice;
  }
}
