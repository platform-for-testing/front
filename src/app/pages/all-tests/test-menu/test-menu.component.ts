import { Component, OnInit, Input } from '@angular/core';
import { Test } from 'app/models/test';

@Component({
  selector: 'pt-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.scss']
})
export class TestMenuComponent implements OnInit {
  @Input() test: Test;
  constructor() { }

  ngOnInit() {
  }

}
