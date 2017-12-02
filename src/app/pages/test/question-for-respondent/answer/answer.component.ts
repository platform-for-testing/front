import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'pt-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerComponent implements OnInit, ControlValueAccessor {

  @Input() answerType;
  @Input() answer;

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  constructor() { }

  ngOnInit() {
  }

}
