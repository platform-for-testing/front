import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  headerImage = '/assets/images/header-background-image.png';
  constructor() { }

  ngOnInit() {
  }
}
