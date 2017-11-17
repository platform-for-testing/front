import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Test} from "app/models/test";

@Component({
    selector: 'pt-test-info',
    templateUrl: './test-info.component.html',
    styleUrls: ['./test-info.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TestInfoComponent implements OnInit {
    @Input() test: Test;

    constructor() {
    }

    ngOnInit() {
    }

}
