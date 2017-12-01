import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ActivationService} from 'app/shared/services/activation.service';
import {AuthRespondentService} from '../../shared/services/auth-respondent.service';
import {Test} from 'app/models/test';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Activation } from 'app/models/activation';
import {RespondentService} from '../../shared/services/respondent.service';
import {FormBuilder, FormGroup} from '@angular/forms';


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
    form: FormGroup;

  @Output() submit: EventEmitter<Test> = new EventEmitter();

    constructor(private activationService: ActivationService,
                private route: ActivatedRoute,
                private respondentAuthService: AuthRespondentService,
                private router: Router,
                private respondentService: RespondentService,
                private fb: FormBuilder) {
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
          .subscribe((result: Activation)  => {
            this.test = result.quiz;
            this.initForm();
          });
    }

    redirect(activationId: string) {
      this.respondentService.activationId = activationId;
      this.router.navigate(['/login']);
    }

    onSubmit() {
      console.log(this.form.value);
      console.log(this.test);
    this.submit.emit(this.form.value);
    }

  initForm(): FormGroup {
    return this.form = this.fb.group({
      id: this.test.id,
      questions: this.fb.array(this.test.questions.map(this.createQuestion))
    });
  }

  createQuestion = (question) => {
    return this.fb.group({
      id: question.id,
      answers: this.fb.array(question.answers.map(this.createAnswer))
    });
  }

  createAnswer = (answer) => {
    return this.fb.group({
      id: answer.id,
      checked: false
    });
  }
}
