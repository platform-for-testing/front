import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../shared/services/test.service';

@Component({
  selector: 'pt-create-new-test-header',
  templateUrl: './create-new-test-header.component.html',
  styleUrls: ['./create-new-test-header.component.scss']
})
export class CreateNewTestHeaderComponent implements OnInit {
  testTitle = 'Test title';
  formDescription = '';
  onUpdateTestTitle(event: Event) {
    this.testTitle = (<HTMLInputElement>event.target).value;
  }
  onUpdateFormDescription(event: Event) {
    this.formDescription = (<HTMLInputElement>event.target).value;
  }
  constructor(private service: TestService) { }

  ngOnInit() {
  }

}
