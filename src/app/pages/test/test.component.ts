import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TestService} from 'app/shared/services/test.service';
import {Test} from 'app/models/test';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pt-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
    headerImage = '/assets/images/header-background-image.png';
    test: Test;
    testId: string;

    constructor(private testService: TestService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(({ testId }) => this.testId = testId);
        this.testService.getTest(this.testId).subscribe(result => this.test = result);
    }
}
