import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../shared/SharedService';

@Component({
  selector: 'pt-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {

  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
  }

  onSelectedOnAllTest(feature: string) {
    this._sharedService.insertData({
      tests: true,
      allTests: feature === 'allTests',
      activations: feature === 'activations',
      allRespondents: feature === 'allRespondents',
    });
  }
}
