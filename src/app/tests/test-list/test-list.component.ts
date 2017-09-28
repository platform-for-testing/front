import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Test} from '../test.model';
import {SharedService} from '../../shared/SharedService';

@Component({
  selector: 'pt-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

  tests: Test[] = [
    new Test('Test name', 'description', 'last edited', 10),
    new Test('Test nameTwo', 'descriptionTwo', 'last editedTwo', 121),
    new Test('my all tests (2)', 'Тест по JS на тему: "Основы. Часть 05', 'Edited 6 days ago', 8)
  ];

  @Output() featureSelectedAllTests = new EventEmitter<string>();

  constructor(public _sharedService: SharedService) {
  }

  ngOnInit() {
  }

/*  onSelectedOnAllTest(feature: string) {
    this._sharedService.insertData({
      tests: true,
      allTests: feature === 'allTests',
      activations: feature === 'activations',
      allRespondents: feature === 'allResponders',
    });
    this.featureSelectedAllTests.emit(feature);
  }*/
}
