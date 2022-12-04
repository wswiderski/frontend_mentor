import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdviceComponent } from './advice/advice.component';
import { AdviceService } from './service/advice.service';

@NgModule({
  declarations: [AppComponent, AdviceComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [AdviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
