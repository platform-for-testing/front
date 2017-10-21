import { Component, OnInit, ElementRef, Output } from '@angular/core';
import { QuestionComponent } from './question/question.component';
import { Question } from './question/question';

@Component({
  selector: 'pt-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];yield

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    
  }

  addQuestion(question: Question) {
    this.questions.push(new Question(this.questions.length + 1, 'Question', '', false, true));
    console.log(this.questions);
    this.startEditing(this.questions.length);
    //this.elementRef.nativeElement.querySelector('.pt-question-list_controls').scrollIntoView();
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
    });
  }

  cloneQuestion(id: number, title: string, description: string, required: boolean) {
    this.questions.splice(id, 0, new Question(this.questions.length + 1, title, description, required, true));
    this.questions.forEach((question, index) => {
      question.id = index + 1;
    });
    this.startEditing(id + 1);
  }

  startEditing(id: number) {
    this.questions.forEach((qstn) => {
      qstn.editable = false;
    });
    this.questions[id - 1].editable = true;
  }
}
