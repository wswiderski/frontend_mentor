import { Component, OnInit } from '@angular/core';
import { Job } from '../model/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
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

  public onTagSelection(tag: string) {
    if (!this.filterBy.includes(tag)) {
      this.filterBy.push(tag);
    }
  }
}
