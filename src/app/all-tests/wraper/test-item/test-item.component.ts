import { Component, OnInit } from '@angular/core';
import {Test} from "./test";

@Component({
  selector: 'pt-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.scss']
})
export class TestItemComponent implements OnInit {
  testImagePath: string;


  tests: Test[] = [
      new Test('Тест по Git. Начальный уровень', 4, 10),
      new Test('Тест по HTML. Средний уровень', 5, 12),
      new Test('Тест по JS на тему: "Основы. Часть 05', 6, 8),
  ];

  constructor() {
    this.testImagePath = '/assets/images/image.jpeg'
  }

  ngOnInit() {
  }

}
