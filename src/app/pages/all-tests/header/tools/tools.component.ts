import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pt-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
    imageGlassPath: string;
    imageHumanPath: string;

    constructor() {
    this.imageGlassPath = '/assets/images/search.svg';
    this.imageHumanPath = '/assets/images/profile.svg';
  }

  ngOnInit() {
  }

}
