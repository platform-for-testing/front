import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pt-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {
  @Output() featureSelectedFromActivation = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectedOnAllTest(feature: string) {
    this.featureSelectedFromActivation.emit(feature);
  }
}
