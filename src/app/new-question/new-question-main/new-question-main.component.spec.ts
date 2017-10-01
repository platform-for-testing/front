import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionMainComponent } from './new-question-main.component';

describe('NewQuestionMainComponent', () => {
  let component: NewQuestionMainComponent;
  let fixture: ComponentFixture<NewQuestionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuestionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
