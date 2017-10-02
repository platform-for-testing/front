import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondersComponent } from './pages/all-responders/all-responders.component';
import { HeaderComponent } from './pages/all-tests/header/header.component';
import { NavigationButtonsComponent } from './pages/all-tests/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './pages/all-tests/header/tools/tools.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { WraperComponent } from './pages/all-tests/tests-list/tests-list.component';
import { CreateNewBlockComponent } from './pages/all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './pages/all-tests/tests-list/test-item/test-item.component';
import { CreateNewTestHeaderComponent } from './pages/create-new-test/create-new-test-header/create-new-test-header.component';
import { CreateNewTestMainComponent } from './pages/create-new-test/create-new-test-main/create-new-test-main.component';
import { CreateNewTestControlsComponent } from './pages/create-new-test/create-new-test-controls/create-new-test-controls.component';
import { CreateNewTestUploaderComponent } from './pages/create-new-test/create-new-test-uploader/create-new-test-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondersComponent,
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
    CreateNewTestUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
