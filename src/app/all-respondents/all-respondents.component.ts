import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/SharedService';

@Component({
  selector: 'pt-all-respondents',
  templateUrl: './all-respondents.component.html',
  styleUrls: ['./all-respondents.component.scss']
})
export class AllRespondentsComponent implements OnInit {

  constructor(public _sharedService: SharedService) {
  }

  ngOnInit() {
  }

}
