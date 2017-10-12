import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestMainComponent } from './create-new-test-main.component';

describe('CreateNewTestMainComponent', () => {
  let component: CreateNewTestMainComponent;
  let fixture: ComponentFixture<CreateNewTestMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTestMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTestMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
