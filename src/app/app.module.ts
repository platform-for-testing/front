import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CreateNewTestMainComponent } from './pages/create-new-test/create-new-test-main/create-new-test-main.component';
import { CreateNewTestControlsComponent } from './pages/create-new-test/create-new-test-controls/create-new-test-controls.component';
import { CreateNewTestUploaderComponent } from './pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component';
import { AllRespondentsListComponent } from './pages/all-respondents/all-respondents-list/all-respondents-list.component';
import { RespondentItemComponent } from './pages/all-respondents/all-respondents-list/respondent-item/respondent-item.component';
import { CreateNewComponent } from './shared/components/create-new/create-new.component';
import {HttpModule} from '@angular/http';
import {HttpService} from "./shared/services/http.service";

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
    CreateNewTestMainComponent,
    CreateNewTestControlsComponent,
    CreateNewTestUploaderComponent,
    AllRespondentsListComponent,
    RespondentItemComponent,
    TestItemComponent,
    CreateNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
