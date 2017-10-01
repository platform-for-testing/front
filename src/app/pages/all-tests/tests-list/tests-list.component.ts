import { Component, OnInit } from '@angular/core';
import {Test} from './test-item/test';

@Component({
  selector: 'pt-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class WraperComponent implements OnInit {

    tests: Test[] = [
        new Test('Тест по Git. Начальный уровень', 4, 10),
        new Test('Тест по HTML. Средний уровень', 5, 12),
        new Test('Тест по JS на тему: "Основы. Часть 05', 6, 8),
    ];

  constructor() { }

  ngOnInit() {
  }

}
