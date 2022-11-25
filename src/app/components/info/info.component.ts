import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IpLocation } from '../../model/ip-location';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() ipLocation: IpLocation | null = null;
  @Input() errorMessage: string = '';

  screenWidth: number = window.screen.width;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  constructor() {}

  ngOnInit(): void {}

  get showDevider(): boolean {
    return this.screenWidth > 600;
  }

  get ipAddress(): string {
    return this.ipLocation ? this.ipLocation.ip : '';
  }

  get location(): string {
    const location = this.ipLocation?.location;
    return location
      ? `${location.city}, ${location.region} ${location.postalCode}`
      : '';
  }

  get timezone(): string {
    const location = this.ipLocation?.location;
    return location ? `UTF ${location.timezone}` : '';
  }

  get isp(): string {
    return this.ipLocation ? this.ipLocation.isp : '';
  }
}
