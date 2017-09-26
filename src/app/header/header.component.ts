import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../shared/SharedService';

@Component({
  selector: 'pt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private _sharedService: SharedService) { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this._sharedService.insertData({
      tests: true,
      allTests: false,
      activations: false,
      allRespondents: false,
    });
    this.featureSelected.emit(feature);
  }
}
