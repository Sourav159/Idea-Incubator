import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLabReviewComponent } from './hr-lab-review.component';

describe('HrLabReviewComponent', () => {
  let component: HrLabReviewComponent;
  let fixture: ComponentFixture<HrLabReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrLabReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLabReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
