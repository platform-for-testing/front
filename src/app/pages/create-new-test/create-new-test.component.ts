import { Component, OnInit } from '@angular/core';
import { CreateNewTestUploaderComponent } from './create-new-test-uploader/create-new-test-uploader.component';
import {TestService} from '../../shared/services/test.service';
import {Test} from '../../models/test';

@Component({
  selector: 'pt-create-new-test',
  templateUrl: './create-new-test.component.html',
  styleUrls: ['./create-new-test.component.scss']
})
export class CreateNewTestComponent implements OnInit {
  test: Test;

  constructor(private testService: TestService) { }

  ngOnInit() {
  }

  createTest(test: Test) {
    return this.testService.createTest(test).subscribe((_test: Test) => this.test = _test);
  }

  updateTest(test: Test) {
    this.testService.updateTest(test).subscribe((_test: Test) => this.test = _test);
  }

  onTestSubmit(test: Test) {
    test.id
      ? this.updateTest(test)
      : this.createTest(test);
  }

}
