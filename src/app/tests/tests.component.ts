import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../shared/NavigationService';

@Component({
  selector: 'pt-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor(public _sharedService: NavigationService) {
  }

  ngOnInit() {
  }

}
