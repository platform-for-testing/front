import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  testImagePath: string;

  constructor() {
    this.testImagePath = '/assets/images/image.jpeg'
  }

  ngOnInit() {
  }

}
