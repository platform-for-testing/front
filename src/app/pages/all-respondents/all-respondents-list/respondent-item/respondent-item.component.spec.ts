import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RespondentItemComponent} from './respondent-item.component';
import {RespondentModel} from '../../../models/respondent.model';
import {UserModel} from '../../../models/user.model';
import {Test} from '../../../models/test';

describe('RespondentItemComponent', () => {
  let component: RespondentItemComponent;
  let fixture: ComponentFixture<RespondentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RespondentItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentItemComponent);
    component = fixture.componentInstance;
    component.respondent = new RespondentModel(new UserModel('userNameFirst', 'userDescriptionFirst', 'lastVisited', 'lastTested'),
      new Test('Тест по HTML. Средний уровень', 5, 12), 1, 5, 'time');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
