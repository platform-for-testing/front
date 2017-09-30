import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TestsComponent} from './tests/tests.component';
import {HeaderComponent} from './header/header.component';
import {TestListComponent} from './tests/test-list/test-list.component';
import {ActivationsComponent} from './activations/activations.component';
import {AllRespondentsComponent} from './all-respondents/all-respondents.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ActivationsComponent,
        TestsComponent,
        AllRespondentsComponent,
        TestListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
