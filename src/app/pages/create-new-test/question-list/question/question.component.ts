import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question';
import { QuestionListComponent } from '../question-list.component';

@Component({
  selector: 'pt-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  @Output() startEditing: EventEmitter<number> = new EventEmitter();

  private editable: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editQuestion(question: Question) {
    this.editable = true;
    this.startEditing.emit(question.id);
  }
}
