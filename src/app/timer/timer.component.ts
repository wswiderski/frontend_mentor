import { Component, OnInit, OnDestroy } from '@angular/core';
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

  ngOnInit(): void {
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

  private calculateTimeLeft(): void {
    const ms = this.targetDate.valueOf() - new Date().valueOf();
    const duration = moment.duration(ms);
    this.daysLeft = duration.days();
    this.hoursLeft = duration.hours();
    this.minutesLeft = duration.minutes();
    this.secondsLeft = duration.seconds();
  }
}
