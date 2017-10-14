import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { Question } from './question/question';

@Component({
  selector: 'pt-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions: Question[] = [];

  addQuestion() {
    this.questions.push(new Question(this.questions.length + 1, 'Question', '', false));
    console.log(this.questions);
  }

  addText() {
    alert('add text');
  }

  addPicture() {
    alert('add picture');
  }

  addVideo() {
    alert('add video');
  }

  addSection() {
    alert('add section');
  }

  removeQuestion(id) {
    this.questions.splice(id - 1, 1);
    this.questions.forEach((question, index) => {
      question.id = index + 1;
    })
  }

  cloneQuestion(id, title, description, required) {
    this.questions.splice(id, 0, new Question(this.questions.length + 1, title, description, required));
    this.questions.forEach((question, index) => {
      question.id = index + 1;
    })
  } 
}
