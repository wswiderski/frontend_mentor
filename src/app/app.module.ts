import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PriceComponent } from './components/price/price.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [AppComponent, PriceComponent, CheckboxComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
