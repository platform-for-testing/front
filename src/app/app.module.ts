import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTestsComponent } from './all-tests/all-tests.component';
import { AllActivationsComponent } from './all-activations/all-activations.component';
import { AllRespondersComponent } from './all-responders/all-responders.component';
import { HeaderComponent } from './all-tests/header/header.component';
import { NavigationButtonsComponent } from './all-tests/header/navigation-buttons/navigation-buttons.component';
import { ToolsComponent } from './all-tests/header/tools/tools.component';
import { CreateNewTestComponent } from './create-new-test/create-new-test.component';
import { WraperComponent } from './all-tests/wraper/wraper.component';
import { CreateNewBlockComponent } from './all-tests/create-new-block/create-new-block.component';
import { TestItemComponent } from './all-tests/wraper/test-item/test-item.component';

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
    TestItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
