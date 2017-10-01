import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionControlsComponent } from './new-question-controls.component';

describe('NewQuestionControlsComponent', () => {
  let component: NewQuestionControlsComponent;
  let fixture: ComponentFixture<NewQuestionControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
