import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list/job-list-item/job-list-item.component';
import { JobListFliterComponent } from './job-list/job-list-fliter/job-list-fliter.component';
import { TagComponent } from './job-list/shared/tag/tag.component';
import { BadgeComponent } from './job-list/shared/badge/badge.component';

import { JobFilterPipe } from './pipes/job-filter.pipe';

import { JobService } from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobListItemComponent,
    JobListFliterComponent,
    TagComponent,
    BadgeComponent,
    JobFilterPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
