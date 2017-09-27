import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRespondentsComponent } from './all-respondents.component';
import {SharedService} from '../shared/SharedService';

describe('AllRespondentsComponent', () => {
  let component: AllRespondentsComponent;
  let fixture: ComponentFixture<AllRespondentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRespondentsComponent ],
      providers: [SharedService]
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
