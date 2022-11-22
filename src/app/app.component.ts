import { Component, AfterViewInit } from '@angular/core';
import { icon, map, Map, Marker, marker, Point, tileLayer } from 'leaflet';
import { IpLocation } from './model/ip-location';
import { IpApiService } from './service/ip-api.service';

const LOC_OFFSET = 0.012;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  map: Map | null = null;
  marker: Marker | null = null;

  ipLocation: IpLocation | null = null;
  errorMessage = '';

  private icon = icon({
    iconUrl: 'assets/images/icon-location.svg',
    iconAnchor: new Point(23, 56),
  });

  constructor(private readonly ipAddressService: IpApiService) {}

  ngAfterViewInit(): void {
    this.loadMap();

    this.ipAddressService.getIPAddress().subscribe({
      next: (ipLocation) => this.setLocationAndNavigateTo(ipLocation),
      error: (err) =>
        (this.errorMessage =
          'Sorry, but location of your IP address was not found.\n\nPlease try to search one!'),
    });
  }

  public onIpLocationResult(result: IpLocation | null) {
    if (!result) {
      this.errorMessage =
        'Sorry, but we cannot find location of given IP or domain.\n\nPlease try to search another one!';
      return;
    }
    this.errorMessage = '';
    this.setLocationAndNavigateTo(result);
  }

  private loadMap(): void {
    this.map = map('map', {
      zoomControl: false,
    }).setView([0, 0], 2);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  private setLocationAndNavigateTo(ipLocation: IpLocation) {
    this.ipLocation = ipLocation;
    this.marker?.remove();
    this.marker = marker([ipLocation.location.lat, ipLocation.location.lng], {
      icon: this.icon,
      interactive: false,
    });

    if (this.map) {
      this.marker.addTo(this.map).openPopup();

      this.map.flyTo(
        [ipLocation.location.lat + LOC_OFFSET, ipLocation.location.lng],
        13
      );
    }
  }
}
