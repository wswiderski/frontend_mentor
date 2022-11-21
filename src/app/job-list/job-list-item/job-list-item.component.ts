import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from 'src/app/model/job';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.scss'],
})
export class JobListItemComponent {
  @Input() job: Job = {} as Job;
  @Output() tagSelection = new EventEmitter<string>();

  get tags(): string[] {
    return [
      this.job.role,
      this.job.level,
      ...this.job.languages,
      ...this.job.tools,
    ];
  }

  public onTagSelection(tag: string): void {
    this.tagSelection.emit(tag);
  }
}
