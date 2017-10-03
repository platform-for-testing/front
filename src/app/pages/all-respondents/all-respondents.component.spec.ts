import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRespondersComponent } from './all-respondents.component';

describe('AllRespondersComponent', () => {
  let component: AllRespondersComponent;
  let fixture: ComponentFixture<AllRespondersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRespondersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRespondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
