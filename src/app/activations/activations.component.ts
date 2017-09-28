import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationService} from '../shared/NavigationService';

@Component({
  selector: 'pt-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {

  constructor(public _sharedService: NavigationService) {
  }

  ngOnInit() {
  }


}
