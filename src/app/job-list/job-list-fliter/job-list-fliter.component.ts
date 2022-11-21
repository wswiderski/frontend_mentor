import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-job-list-fliter',
  templateUrl: './job-list-fliter.component.html',
  styleUrls: ['./job-list-fliter.component.scss'],
})
export class JobListFliterComponent {
  @Input() tags: string[] = [];
  @Output() tagRemove = new EventEmitter<string>();
  @Output() tagsClear = new EventEmitter();

  public onTagRemove(tag: string): void {
    this.tagRemove.emit(tag);
  }

  public onTagsClear(): void {
    this.tagsClear.emit();
  }
}
