import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-app-create-new-test-header',
  templateUrl: './create-new-test-header.component.html',
  styleUrls: ['./create-new-test-header.component.scss']
})
export class CreateNewTestHeaderComponent implements OnInit {
testTitle = 'Test Title';
formDescription = '';

  constructor() { }

  ngOnInit() {
  }
onUpdateTestTitle(event: Event) {
  this.testTitle = (<HTMLInputElement>event.target).value;
}
  onUpdateFormDescription(event: Event) {
    this.formDescription = (<HTMLInputElement>event.target).value;
  }
}
