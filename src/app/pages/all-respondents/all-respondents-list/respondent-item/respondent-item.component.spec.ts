import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentItemComponent } from './respondent-item.component';

describe('RespondentItemComponent', () => {
  let component: RespondentItemComponent;
  let fixture: ComponentFixture<RespondentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
