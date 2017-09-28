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

@NgModule({
  declarations: [
    AppComponent,
    AllTestsComponent,
    AllActivationsComponent,
    AllRespondersComponent,
    HeaderComponent,
    NavigationButtonsComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
