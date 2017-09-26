import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/SharedService';

@Component({
  selector: 'pt-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor(public _sharedService: SharedService) {
  }

  ngOnInit() {
  }

  onFeatureSelectedInAllTests(feature: string) {
    this._sharedService.insertData({
      tests: true,
      allTests: feature === 'allTests',
      activations: feature === 'activations',
      allRespondents: feature === 'allRespondents',
    });
    console.log(this._sharedService.pageObject);
  }

}
