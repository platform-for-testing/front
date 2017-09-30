import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetailComponent } from './test-detail.component';
import {NavigationService} from '../../shared/NavigationService';

describe('TestDetailComponent', () => {
  let component: TestDetailComponent;
  let fixture: ComponentFixture<TestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDetailComponent ],
      providers: [NavigationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
