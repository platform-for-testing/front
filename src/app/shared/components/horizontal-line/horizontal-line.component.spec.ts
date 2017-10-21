import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD:src/app/pages/create-new-test/question-list/question/question.component.spec.ts
import { QuestionComponent } from './question.component';
import { Question } from './question';

const questionMock = new Question(1, 'Question', '', true, true);
=======
import { HorizontalLineComponent } from './horizontal-line.component';
>>>>>>> 898643461270cbab691c2a97b771604e5b5e08de:src/app/shared/components/horizontal-line/horizontal-line.component.spec.ts

describe('HorizontalLineComponent', () => {
  let component: HorizontalLineComponent;
  let fixture: ComponentFixture<HorizontalLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:src/app/pages/create-new-test/question-list/question/question.component.spec.ts
      declarations: [ QuestionComponent ],
      imports: [FormsModule]
=======
      declarations: [ HorizontalLineComponent ]
>>>>>>> 898643461270cbab691c2a97b771604e5b5e08de:src/app/shared/components/horizontal-line/horizontal-line.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalLineComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.question = questionMock;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
