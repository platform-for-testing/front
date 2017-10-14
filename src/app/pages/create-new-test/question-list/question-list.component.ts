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

  addQuestion(question: Question) {
    this.questions.push(new Question(this.questions.length + 1, 'Question', '', false, true));
    console.log(this.questions);
    this.editQuestion(this.questions[this.questions.length - 1]);
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

  removeQuestion(id: number) {
    this.questions.splice(id - 1, 1);
    this.questions.forEach((question, index) => {
      question.id = index + 1;
    })
  }

  cloneQuestion(id: number, title: string, description: string, required: boolean) {
    this.questions.splice(id, 0, new Question(this.questions.length + 1, title, description, required, true));
    this.questions.forEach((question, index) => {
      question.id = index + 1;
    })
    this.editQuestion(this.questions[id]);
  } 

  editQuestion(question: Question) {
    this.questions.forEach((question) => {
      question.editable = false;
    });
    question.editable = true;
  }

}
