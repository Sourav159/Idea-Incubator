import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COEPriortizationComponent } from './coepriortization.component';

describe('COEComponent', () => {
  let component: COEPriortizationComponent;
  let fixture: ComponentFixture<COEPriortizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COEPriortizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COEPriortizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
