import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Question} from "app/models/question";

@Component({
  selector: 'pt-question-for-respondent',
  templateUrl: './question-for-respondent.component.html',
  styleUrls: ['./question-for-respondent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionForRespondentComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit() {
  }

}
