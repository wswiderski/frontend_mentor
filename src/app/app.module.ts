import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NumberInputComponent } from './calculator/util/number-input/number-input.component';
import { TipInputComponent } from './calculator/util/tip-input/tip-input.component';
import { ResultTextComponent } from './calculator/util/result-text/result-text.component';
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
