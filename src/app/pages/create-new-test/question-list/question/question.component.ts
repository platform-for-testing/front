import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './question';
import { QuestionListComponent } from '../question-list.component';
import { CreateNewTestMultiselectComponent } from '../../create-new-test-multiselect/create-new-test-multiselect.component';

@Component({
  selector: 'pt-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  mulselItems = [{
    value: 'Multiple choices',
    icon: 'icon'
  }, {
    value: 'Checkboxes',
    icon: 'icon icon_checkbox'
  }, {
    value: 'Yes/No',
    icon: 'icon icon_truefalse'
  }, {
    value: 'Ordering',
    icon: 'icon icon_ordering'
  }];

  mulselNumbers = [{
    value: 1,
    icon: 'icon'
  }, {
    value: 2,
    icon: 'icon'
  }, {
    value: 3,
    icon: 'icon'
  }, {
    value: 4,
    icon: 'icon'
  }];

  @Input() question: Question;
  @Output() startEditing: EventEmitter<number> = new EventEmitter();

  titleFocus: boolean;
  descriptionFocus: boolean;

  constructor() { }

  ngOnInit() {
  }

  editQuestion(question: Question) {
    this.startEditing.emit(question.id);
  }
}
