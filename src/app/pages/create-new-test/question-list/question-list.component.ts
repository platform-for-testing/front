import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { QuestionComponent } from './question/question.component';
import { Question } from './question/question';

@Component({
  selector: 'pt-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: Question[] = [];
  form: FormGroup;
  showPicture:boolean = false;
  editedQuestion: number;

  constructor(private elementRef: ElementRef, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      questions: this.fb.array(this.questions.map(this.createQuestion))
    });
    this.form.valueChanges.subscribe(value => {
      this.questions = value.questions;
    });
  }

  // ngAfterViewChecked() {
  // }
  createQuestion = (question: Question) => {
    return this.fb.control(question);
  }

  addQuestion() {
    const newQuestion: Question = new Question();
    const questionsArray = this.form.get('questions') as FormArray;

    questionsArray.push(this.fb.control(newQuestion));
    // this.form.updateValueAndValidity();
    this.editQuestion(questionsArray.length - 1);
  }

  addText() {
    alert('add text');
  }


  addPicture() {
    this.showPicture = !this.showPicture;
  }

  receive(event) {
    this.showPicture = event;
  }

  addVideo() {
    alert('add video');
  }

  addSection() {
    alert('add section');
  }

  removeQuestion(index: number) {
    const questionsArray = this.form.get('questions') as FormArray;

    questionsArray.removeAt(index);
    this.editQuestion(index);
  }

  cloneQuestion(index: number) {
    const questionsArray = this.form.get('questions') as FormArray;
    const questionValue = questionsArray.value[index];

    const newQuestion: Question = questionValue;

    questionsArray.insert(index + 1, this.fb.control(newQuestion));
    this.editQuestion(index);
  }

  editQuestion(index: number) {
    this.editedQuestion = index;
  }
}
