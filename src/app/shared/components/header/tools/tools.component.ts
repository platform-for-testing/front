import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pt-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
    imageGlassPath: string;
    imageHumanPath: string;
    route: string;


    constructor(_route: Router) {
    this.imageGlassPath = '/assets/images/search.svg';
    this.imageHumanPath = '/assets/images/profile.svg';
    this.route = _route.url;
  }

  ngOnInit() {
  }

}
