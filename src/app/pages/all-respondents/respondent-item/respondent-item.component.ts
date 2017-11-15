import {Component, Input, OnInit} from '@angular/core';
import {RespondentModel} from '../../models/respondent.model';

@Component({
  selector: 'pt-respondent-item',
  templateUrl: './respondent-item.component.html',
  styleUrls: ['./respondent-item.component.scss']
})
export class RespondentItemComponent implements OnInit {

  @Input() respondent: RespondentModel;

  constructor() {
  }

  ngOnInit() {
  }

}
