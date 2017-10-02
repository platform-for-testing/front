import { Component, OnInit } from '@angular/core';
import { CreateNewTestHeaderComponent } from './create-new-test-header/create-new-test-header.component';
import { CreateNewTestMainComponent } from './create-new-test-main/create-new-test-main.component';
import { CreateNewTestControlsComponent } from './create-new-test-controls/create-new-test-controls.component';
import { CreateNewTestUploaderComponent } from './create-new-test-uploader/create-new-test-uploader.component';

@Component({
  selector: 'pt-create-new-test',
  templateUrl: './create-new-test.component.html',
  styleUrls: ['./create-new-test.component.scss']
})
export class CreateNewTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
