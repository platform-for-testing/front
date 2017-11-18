import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/services/test.service';
import {Test} from 'app/models/test';

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
    this.testService.getTests().subscribe(result => this.tests = result);
  }

}
