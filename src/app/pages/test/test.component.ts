import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivationService} from 'app/shared/services/activation.service';
import {Test} from 'app/models/test';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pt-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ActivationService]
})
export class TestComponent implements OnInit {
    headerImage = '/assets/images/header-background-image.png';
    test: Test;
    activation: any;
    activationId: string;

    constructor(private activationService: ActivationService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(({ activationId }) => this.activationId = activationId);
        this.activationService.getActivation(this.activationId).subscribe(result => this.activation = result);
        this.test = this.activation.quiz;
    }
}
