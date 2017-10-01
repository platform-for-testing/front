import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionHeaderComponent } from './new-question-header.component';

describe('NewQuestionHeaderComponent', () => {
  let component: NewQuestionHeaderComponent;
  let fixture: ComponentFixture<NewQuestionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
