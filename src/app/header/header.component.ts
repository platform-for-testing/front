import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavigationService} from '../shared/NavigationService';

@Component({
  selector: 'pt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    public _sharedService: NavigationService) { }

  ngOnInit() {
  }
}
