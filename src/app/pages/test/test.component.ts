import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TestService} from 'app/shared/services/test.service';
import {Test} from 'app/models/test';

@Component({
    selector: 'pt-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
    headerImage = '/assets/images/header-background-image.png';
    test: Test;

    constructor(private testService: TestService) {
    }
    // TODO add receiving id from URL
    idStr = '5a0eeff3873fca9c8b5cdb18';
    ngOnInit() {
        this.testService.getTest(this.idStr).subscribe(result => this.test = result);
    }
}
