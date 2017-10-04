import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRespondentsListComponent } from './all-respondents-list.component';
import {RespondentItemComponent} from './respondent-item/respondent-item.component';

xdescribe('AllRespondentsListComponent', () => {
  let component: AllRespondentsListComponent;
  let fixture: ComponentFixture<AllRespondentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRespondentsListComponent, RespondentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRespondentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
