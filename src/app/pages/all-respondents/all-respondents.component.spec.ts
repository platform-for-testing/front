import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRespondentsComponent } from './all-respondents.component';

xdescribe('AllRespondentsComponent', () => {
  let component: AllRespondentsComponent;
  let fixture: ComponentFixture<AllRespondentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRespondentsComponent ]
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
