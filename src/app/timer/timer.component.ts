import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  daysLeft: number = 0;
  hoursLeft: number = 0;
  minutesLeft: number = 0;
  secondsLeft: number = 0;

  targetDate = new Date();

  intervalSubscription?: Subscription;

  width: number = 200;
  height: number = 220;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustItemSize(event.target.innerWidth, event.target.windowHeight);
  }

  ngOnInit(): void {
    this.adjustItemSize(window.innerWidth, window.innerHeight);

    this.targetDate.setDate(this.targetDate.getDate() + 8);
    this.targetDate.setHours(this.targetDate.getHours() + 23);
    this.targetDate.setMinutes(this.targetDate.getMinutes() + 55);
    this.targetDate.setSeconds(this.targetDate.getSeconds() + 41);

    this.calculateTimeLeft();
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.calculateTimeLeft();
    });
  }

  ngOnDestroy(): void {
    this.intervalSubscription?.unsubscribe();
  }

  get fontSize(): number {
    return this.height / 2.2;
  }

  get fontSizeLabel(): number {
    return this.width / 9;
  }

  private calculateTimeLeft(): void {
    const ms = this.targetDate.valueOf() - new Date().valueOf();
    const duration = moment.duration(ms);
    this.daysLeft = duration.days();
    this.hoursLeft = duration.hours();
    this.minutesLeft = duration.minutes();
    this.secondsLeft = duration.seconds();
  }

  private adjustItemSize(windowWidth: number, windowHeight: number) {
    if (windowWidth < 1000) {
      this.width = windowWidth / 5;
      this.height = windowHeight * 0.2;
    } else {
      this.width = 200;
      this.height = 220;
    }
  }
}
