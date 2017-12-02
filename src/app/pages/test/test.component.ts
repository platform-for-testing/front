import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivationService} from 'app/shared/services/activation.service';
import {AuthRespondentService} from '../../shared/services/auth-respondent.service';
import {Test} from 'app/models/test';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Activation } from 'app/models/activation';
import {RespondentService} from '../../shared/services/respondent.service';


@Component({
    selector: 'pt-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    // encapsulation: ViewEncapsulation.None,
    providers: [ActivationService]
})
export class TestComponent implements OnInit {
    headerImage = '/assets/images/header-background-image.png';
    test: Test;
    activation: Activation;
    activationId: string;

    constructor(private activationService: ActivationService,
                private route: ActivatedRoute,
                private respondentAuthService: AuthRespondentService,
                private router: Router,
                private respondentService: RespondentService) {
    }

    ngOnInit() {
        this.route.params
            .map(({ activationId }) => activationId)
            .subscribe((activationId: string)  => {
              this.respondentAuthService.isLoggedInMap
                ? this.loadQuiz(activationId)
                : this.redirect(activationId);
    });
    }

    loadQuiz(activationId: string) {
        this.activationService.getActivation(activationId)
          .subscribe((result: Activation)  => this.test = result.quiz);
    }

    redirect(activationId: string) {
      this.respondentService.activationId = activationId;
      this.router.navigate(['/login']);
    }
}
