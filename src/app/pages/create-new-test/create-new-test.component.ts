import { Component, OnInit } from '@angular/core';
import { CreateNewTestHeaderComponent } from './create-new-test-header/create-new-test-header.component';
import { CreateNewTestUploaderComponent } from './create-new-test-uploader/create-new-test-uploader.component';
import {TestService} from '../../shared/services/test.service';
import {Test} from '../models/test';

@Component({
  selector: 'pt-create-new-test',
  templateUrl: './create-new-test.component.html',
  styleUrls: ['./create-new-test.component.scss']
})
export class CreateNewTestComponent implements OnInit {
  testTitle = 'Test title';
  formDescription = '';
  test: Test;

  onUpdateTestTitle(event: Event) {
    this.testTitle = (<HTMLInputElement>event.target).value;
  }

  onUpdateFormDescription(event: Event) {
    this.formDescription = (<HTMLInputElement>event.target).value;
  }

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
