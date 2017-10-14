import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question';
import { QuestionListComponent } from '../question-list.component';

@Component({
  selector: 'pt-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];

  constructor() { }

  ngOnInit() {
  }

  editQuestion(question: Question) {
    this.questions.forEach((question) => {
      question.editable = false;
    });
    question.editable = true;
  }
}
