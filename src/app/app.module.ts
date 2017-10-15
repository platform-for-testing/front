import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondentsComponent } from './pages/all-respondents/all-respondents.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationButtonsComponent } from './shared/components/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './shared/components/header/tools/tools.component';
import { WraperComponent } from './pages/all-tests/tests-list/tests-list.component';
import { CreateNewBlockComponent } from './pages/all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './pages/all-tests/tests-list/test-item/test-item.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { CreateNewTestHeaderComponent } from './pages/create-new-test/create-new-test-header/create-new-test-header.component';
import { CreateNewTestUploaderComponent } from './pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component';
import { AllRespondentsListComponent } from './pages/all-respondents/all-respondents-list/all-respondents-list.component';
import { RespondentItemComponent } from './pages/all-respondents/all-respondents-list/respondent-item/respondent-item.component';
import { CreateNewComponent } from './shared/components/create-new/create-new.component';
import {HttpModule} from '@angular/http';
import {GetRespondentsService} from './shared/services/getRespondents.service';
import { CreateNewTestMultiselectComponent } from './pages/create-new-test/create-new-test-multiselect/create-new-test-multiselect.component';
import { QuestionListComponent } from './pages/create-new-test/question-list/question-list.component';
import { QuestionComponent } from './pages/create-new-test/question-list/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondentsComponent,
    HeaderComponent,
    NavigationButtonsComponent,
    ToolsComponent,
    WraperComponent,
    CreateNewBlockComponent,
    TestItemComponent,
    CreateNewTestComponent,
    CreateNewTestHeaderComponent,
    CreateNewTestUploaderComponent,
    AllRespondentsListComponent,
    RespondentItemComponent,
    TestItemComponent,
    CreateNewComponent,
    CreateNewTestMultiselectComponent,
    QuestionListComponent,
    QuestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetRespondentsService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
