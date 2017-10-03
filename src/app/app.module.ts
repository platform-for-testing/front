import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTestsComponent } from './pages/all-tests/all-tests.component';
import { AllActivationsComponent } from './pages/all-activations/all-activations.component';
import { AllRespondersComponent } from './pages/all-responders/all-responders.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationButtonsComponent } from './shared/components/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './shared/components/header/tools/tools.component';
import { CreateNewTestComponent } from './pages/create-new-test/create-new-test.component';
import { WraperComponent } from './pages/all-tests/tests-list/tests-list.component';
import { CreateNewBlockComponent } from './pages/all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './pages/all-tests/tests-list/test-item/test-item.component';
import { CreateNewComponent } from './shared/components/create-new/create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondersComponent,
    HeaderComponent,
    NavigationButtonsComponent,
    ToolsComponent,
    CreateNewTestComponent,
    WraperComponent,
    CreateNewBlockComponent,
    TestItemComponent,
    CreateNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
