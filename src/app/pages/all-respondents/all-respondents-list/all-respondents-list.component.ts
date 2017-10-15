import {Component, OnInit} from '@angular/core';
import {RespondentModel} from '../../models/respondent.model';
import {GetRespondentsService} from '../../../shared/services/getRespondents.service';

@Component({
  selector: 'pt-all-respondents-list',
  templateUrl: './all-respondents-list.component.html',
  styleUrls: ['./all-respondents-list.component.scss']
})
export class AllRespondentsListComponent implements OnInit {

  public respondentsList: RespondentModel[];
  promiseRespondents: Promise<RespondentModel[]>;
  errorMessage: String;

  constructor(private request: GetRespondentsService) {
    this.request = request;
  }

  ngOnInit() {
    this.promiseRespondents = this.request.get();
    this.promiseRespondents.then(
      respondent => this.respondentsList = respondent,
      error => this.errorMessage = <any>error);
  }

}
