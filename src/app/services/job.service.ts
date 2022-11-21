import { Injectable } from '@angular/core';
import * as jobs from '../../assets/data.json';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  public getJobs(): Job[] {
    return (jobs as any).default;
  }
}
