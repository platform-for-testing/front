import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { TestService } from '../../shared/services/test.service';

@Component({
  selector: 'pt-all-tests',
  templateUrl: './all-tests.component.html',
  styleUrls: ['./all-tests.component.scss']
})
export class AllTestsComponent implements OnInit {

  tests: Test[];

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.testService.getTest().subscribe(result => this.tests = result);
  }

}
