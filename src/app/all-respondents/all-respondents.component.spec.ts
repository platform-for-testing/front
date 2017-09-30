import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRespondentsComponent } from './all-respondents.component';
import {NavigationService} from '../shared/NavigationService';

describe('AllRespondentsComponent', () => {
  let component: AllRespondentsComponent;
  let fixture: ComponentFixture<AllRespondentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRespondentsComponent ],
      providers: [NavigationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRespondentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
