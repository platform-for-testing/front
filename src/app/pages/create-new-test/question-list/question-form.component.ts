import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

import { QuestionComponent } from './question/question.component';
import { Question } from '../../models/question';
import {Test} from '../../models/test';

@Component({
  selector: 'pt-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  questions: Question[] = [];
  form: FormGroup;
  showPicture = false;
  editedQuestion: number;
  questionsFormArray: FormArray;

  @Input()
  set test(test: Test) {
    if (this.form) {
      this.form.setValue(test);
    }
  }

  @Output() submit: EventEmitter<Test> = new EventEmitter();

  constructor(private elementRef: ElementRef, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      id: '',
      title: '',
      description: '',
      questions: this.fb.array(this.questions.map(this.createQuestion))
    });

    this.questionsFormArray = this.form.get('questions') as FormArray;

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
    this.editQuestion(questionsArray.length - 1);
  }

  onSubmit() {
    console.log(this.form.value);
    this.submit.emit(this.form.value);
  }

  addText() {
    alert('add text');
  }

  addPicture() {
    this.showPicture = !this.showPicture;
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
