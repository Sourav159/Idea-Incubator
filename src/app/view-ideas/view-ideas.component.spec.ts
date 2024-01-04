import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdeasComponent } from './view-ideas.component';

describe('ViewIdeasComponent', () => {
  let component: ViewIdeasComponent;
  let fixture: ComponentFixture<ViewIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
