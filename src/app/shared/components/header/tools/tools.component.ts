import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'pt-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
    imageGlassPath: string;
    imageHumanPath: string;
    route: string;
    public modalVariable = false;


    constructor(private router: Router, public eref: ElementRef) {
        this.imageGlassPath = '/assets/images/search.svg';
        this.imageHumanPath = '/assets/images/profile.svg';
        this.route = router.url;
    }

    ngOnInit() {
    }

    threeDotsClicked(event) {
        event.stopPropagation();
        this.modalVariable = !this.modalVariable;
    }

}
