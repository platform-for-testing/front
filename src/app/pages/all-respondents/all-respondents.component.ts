import {Component, OnInit} from '@angular/core';
import { RespondentModel } from '../models/respondent.model';
import { RespondentService } from '../../shared/services/respondent.service';

@Component({
  selector: 'pt-all-responders',
  templateUrl: './all-respondents.component.html',
  styleUrls: ['./all-respondents.component.scss']
})
export class AllRespondentsComponent implements OnInit {
  public respondentsList: RespondentModel[];

  constructor(private respondentService: RespondentService) {
  }

  ngOnInit() {
    this.respondentService.getRespondents().subscribe(result => this.respondentsList = result);
  }

}
