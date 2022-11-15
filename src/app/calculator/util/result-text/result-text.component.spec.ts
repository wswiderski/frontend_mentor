import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTextComponent } from './result-text.component';

describe('ResultTextComponent', () => {
  let component: ResultTextComponent;
  let fixture: ComponentFixture<ResultTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
