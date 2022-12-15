import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipperItemComponent } from './flipper-item.component';

describe('TimerItemComponent', () => {
  let component: FlipperItemComponent;
  let fixture: ComponentFixture<FlipperItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlipperItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
