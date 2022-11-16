import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NumberInputComponent } from './calculator/number-input/number-input.component';
import { TipInputComponent } from './calculator/tip-input/tip-input.component';
import { ResultTextComponent } from './calculator/result-text/result-text.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumberInputComponent,
    TipInputComponent,
    ResultTextComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
