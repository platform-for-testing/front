import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pt-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerComponent implements OnInit {
  @Input() answerType;
  @Input() answer;

  constructor() { }

  ngOnInit() {
    console.log(this.answerType);
  }

}
