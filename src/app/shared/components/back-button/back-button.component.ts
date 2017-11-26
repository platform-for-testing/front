import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pt-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],

})
export class BackButtonComponent implements OnInit {

  get shoudShowSelf(): boolean {
    return this.route.snapshot.url[0].path !== 'all-tests';
  }

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  handleClick(event) {
    event.stopPropagation();

    this.location.back();
  }

}
