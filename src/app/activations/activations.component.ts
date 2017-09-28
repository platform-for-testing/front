import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../shared/SharedService';

@Component({
  selector: 'pt-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {

  constructor(public _sharedService: SharedService) {
  }

  ngOnInit() {
  }


}
