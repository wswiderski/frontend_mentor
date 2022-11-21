import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../model/job';

@Pipe({
  name: 'jobFilter',
  pure: false,
})
export class JobFilterPipe implements PipeTransform {
  transform(jobs: Job[], filterBy: string[]): Job[] {
    if (filterBy.length === 0) {
      return jobs;
    }
    return jobs.filter((job) => {
      const tags = this.getTags(job);
      for (const filter of filterBy) {
        if (!tags.includes(filter)) {
          return false;
        }
      }
      return true;
    });
  }

  private getTags(job: Job): string[] {
    return [job.role, job.level, ...job.languages, ...job.tools];
  }
}
