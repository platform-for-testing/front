import {Component, Input, OnInit} from '@angular/core';
import {Activation} from "../../../models/activation";

@Component({
  selector: 'pt-activation-item',
  templateUrl: './activation-item.component.html',
  styleUrls: ['./activation-item.component.scss']
})
export class ActivationItemComponent implements OnInit {

  @Input() activation: Activation;


  constructor() {}

  ngOnInit() {
  }

}
