import { Component, Input, OnInit } from '@angular/core';
import { IpLocation } from '../../model/ip-location';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() ipLocation: IpLocation | null = null;
  @Input() errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

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
