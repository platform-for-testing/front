import {Component, OnInit} from '@angular/core';
import {RespondentModel} from '../../models/respondent.model';
import {UserModel} from '../../models/user.model';
import {Test} from '../../models/test';

@Component({
  selector: 'pt-all-respondents-list',
  templateUrl: './all-respondents-list.component.html',
  styleUrls: ['./all-respondents-list.component.scss']
})
export class AllRespondentsListComponent implements OnInit {

  public respondentsList: RespondentModel[];

  constructor() {
  }

  ngOnInit() {
    let userOne: UserModel;
    let userTwo: UserModel;
    let testOne: Test;
    let testTwo: Test;
    userOne = new UserModel('userNameFirst', 'userDescriptionFirst', 'lastVisited', 'lastTested');
    userTwo = new UserModel('userNameSecond', 'userDescriptionSecond', 'lastVisited', 'lastTested');
    testOne = new Test('Тест по HTML. Средний уровень', 5, 12);
    testTwo = new Test('Тест по Git. Начальный уровень', 4, 10);

    this.respondentsList = [
      new RespondentModel(userOne, testOne, 1, 5, 'time'),
      new RespondentModel(userTwo, testTwo, 2, 10, 'time')
    ];
  }

}
