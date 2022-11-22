import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IpLocation } from '../model/ip-location';

const API_KEY = 'at_3gLNJKPY4iX4TXyVXqsXcUIZfyPPn';

@Injectable({
  providedIn: 'root',
})
export class IpApiService {
  constructor(private readonly http: HttpClient) {}

  public getIPAddress(ipOrDomain?: string): Observable<IpLocation> {
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
    if (ipOrDomain) {
      url += `&ipAddress=${ipOrDomain}`;
      url += `&domain=${ipOrDomain}`;
    }

    return this.http.get<IpLocation>(url);
  }
}
