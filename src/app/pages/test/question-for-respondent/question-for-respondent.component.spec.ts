import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionForRespondentComponent } from './question-for-respondent.component';

describe('QuestionForRespondentComponent', () => {
  let component: QuestionForRespondentComponent;
  let fixture: ComponentFixture<QuestionForRespondentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionForRespondentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionForRespondentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
