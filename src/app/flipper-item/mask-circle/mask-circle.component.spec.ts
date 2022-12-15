import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskCircleComponent } from './mask-circle.component';

describe('MaskCircleComponent', () => {
  let component: MaskCircleComponent;
  let fixture: ComponentFixture<MaskCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
