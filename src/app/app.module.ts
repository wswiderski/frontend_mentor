import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './components/balance/balance.component';
import { SpendingComponent } from './components/spending/spending.component';
import { ChartComponent } from './components/spending/chart/chart.component';
import { ChartBarComponent } from './components/spending/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    SpendingComponent,
    ChartComponent,
    ChartBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
