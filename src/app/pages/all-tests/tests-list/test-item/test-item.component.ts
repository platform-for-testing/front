import {Component, Input, OnInit} from '@angular/core';
import {Test} from './test';

@Component({
  selector: 'pt-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  testImagePath: string;

  @Input() test: Test;

  constructor() {
    this.testImagePath = '/assets/images/image.jpeg';
  }

  ngOnInit() {
  }

}
