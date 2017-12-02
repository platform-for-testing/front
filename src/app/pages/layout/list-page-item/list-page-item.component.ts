import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pt-list-page-item',
  templateUrl: './list-page-item.component.html',
  styleUrls: ['./list-page-item.component.scss']
})
export class ListPageItemComponent implements OnInit {
  @Input() hasMenu: Boolean = false;
  isMenuOpen: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  triggerMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
