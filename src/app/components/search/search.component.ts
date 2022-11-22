import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IpLocation } from 'src/app/model/ip-location';
import { IpApiService } from 'src/app/service/ip-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() ipLocationResult = new EventEmitter<IpLocation | null>();

  ip = new FormControl('');

  constructor(private readonly ipAddressService: IpApiService) {}

  onSearch() {
    this.ipAddressService.getIPAddress(this.ip.value).subscribe({
      next: (ipLocation) => this.ipLocationResult.emit(ipLocation),
      error: (err) => this.ipLocationResult.emit(null),
    });
  }
}
