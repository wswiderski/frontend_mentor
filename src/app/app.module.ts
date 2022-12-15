import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { FlipperItemComponent } from './flipper-item/flipper-item.component';
import { MaskCircleComponent } from './flipper-item/mask-circle/mask-circle.component';

@NgModule({
  declarations: [AppComponent, TimerComponent, FlipperItemComponent, MaskCircleComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
