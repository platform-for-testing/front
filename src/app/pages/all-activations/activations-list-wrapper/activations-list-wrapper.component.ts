import { Component, OnInit } from '@angular/core';
import {Activation} from "../../models/activation";


@Component({
  selector: 'pt-activations-list-wrapper',
  templateUrl: './activations-list-wrapper.component.html',
  styleUrls: ['./activations-list-wrapper.component.scss']
})
export class ActivationsListWrapperComponent implements OnInit {

  activations: Activation[] = [
      new Activation('activation name', 2, 1, 3, '/assets/images/image.jpeg'),
      new Activation('another name', 4, 5, 6, '/assets/images/image.jpeg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
