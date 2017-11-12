import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pt-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  @Input() heading: string = 'default heading';
  @Input() listLength: string = '0';
  constructor() { }

  ngOnInit() {
  }

}
