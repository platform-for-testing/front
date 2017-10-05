import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestControlsComponent } from './create-new-test-controls.component';

describe('CreateNewTestControlsComponent', () => {
  let component: CreateNewTestControlsComponent;
  let fixture: ComponentFixture<CreateNewTestControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTestControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTestControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
