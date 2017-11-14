import { Component, OnInit } from '@angular/core';
import { Activation } from 'app/models/activation';

@Component({
  selector: 'pt-all-activations',
  templateUrl: './all-activations.component.html',
  styleUrls: ['./all-activations.component.scss']
})
export class AllActivationsComponent implements OnInit {
  activations: Activation[] = [
    new Activation('ACTIVATION NAME', 2, 1, 3, '/assets/images/image.jpeg', true),
    new Activation('ANOTHER ACTIVATOIN', 4, 5, 6, '/assets/images/image.jpeg', false),
  ];

  constructor() { }

  ngOnInit() {
  }

}
