import { Component, OnInit } from '@angular/core';
import {Test} from '../../models/test';
import {TestService} from '../../../shared/services/test.service';

@Component({
  selector: 'pt-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class WraperComponent implements OnInit {

    tests: Test[] ;

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.testService.getTest().subscribe(result => this.tests = result);
  }

}
