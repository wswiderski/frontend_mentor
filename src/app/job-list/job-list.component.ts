import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0, height: '100%' }),
        animate('0.5s', style({ opacity: 1, height: '100%' })),
      ]),
      transition(':leave', [animate('0.5s', style({ opacity: 0, height: 0 }))]),
    ]),
  ],
})
export class JobListComponent implements OnInit {
  filterBy: string[] = [];
  jobs: Job[] = [];

  constructor(private readonly jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }

  public onTagRemove(tag: string) {
    const index = this.filterBy.indexOf(tag);
    this.filterBy.splice(index, 1);
  }

  public onTagSelection(tag: string, elementId: string) {
    if (!this.filterBy.includes(tag)) {
      this.filterBy.push(tag);
      document.getElementById(elementId)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
