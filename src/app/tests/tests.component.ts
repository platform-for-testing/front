import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pt-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  featureSelectedInAllTests = 'allTests';

  constructor() {
  }

  ngOnInit() {
  }

  onFeatureSelectedInAllTests(feature: string) {
    this.featureSelectedInAllTests = feature;
  }

}
