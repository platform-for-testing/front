import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestsComponent } from './tests/tests.component';
import { TestDetailComponent } from './tests/test-detail/test-detail.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { TestItemComponent } from './tests/test-list/test-item/test-item.component';
import { ActivationsComponent } from './activations/activations.component';
import { AllRespondentsComponent } from './all-respondents/all-respondents.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestsComponent,
    TestDetailComponent,
    TestListComponent,
    TestItemComponent,
    ActivationsComponent,
    AllRespondentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
