import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestsComponent} from './tests.component';
import {NavigationService} from '../shared/NavigationService';
import {TestListComponent} from './test-list/test-list.component';
import {ActivationsComponent} from '../activations/activations.component';
import {AllRespondentsComponent} from '../all-respondents/all-respondents.component';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestsComponent,
        TestListComponent,
        ActivationsComponent,
        AllRespondentsComponent
      ],
      providers: [NavigationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
