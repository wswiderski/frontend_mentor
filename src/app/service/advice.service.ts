import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = 'https://api.adviceslip.com/advice';

@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private readonly http: HttpClient) {}

  public getAdvice(): Observable<any> {
    return this.http.get(URL);
  }
}
