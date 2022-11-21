import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFliterComponent } from './job-list-fliter.component';

describe('JobListFliterComponent', () => {
  let component: JobListFliterComponent;
  let fixture: ComponentFixture<JobListFliterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListFliterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListFliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
