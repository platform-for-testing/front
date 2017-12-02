import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Question} from 'app/models/question';
import {ControlValueAccessor, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pt-question-for-respondent',
  templateUrl: './question-for-respondent.component.html',
  styleUrls: ['./question-for-respondent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionForRespondentComponent implements OnInit, ControlValueAccessor {

  @Input() question: any;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: this.question.id,
      answers: this.fb.array(this.question.answers.map(this.createAnswer))
    });

    this.form.valueChanges
      .map(value => value.answers = value.answers.filter(answer => answer.checked))
      .map(value => value.answers = value.answers.map(({ id }) => id))
      .subscribe((value: any) => {
        this.propagateChange(value);
      });
  }
  createAnswer = (answer) => {
    return this.fb.group({
      id: answer.id,
      checked: false
    });
  }

  writeValue(value: any): void {
    if (value !== void(0)) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  propagateChange(value: any) {}
}
