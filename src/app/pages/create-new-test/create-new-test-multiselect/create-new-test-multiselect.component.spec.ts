import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestMultiselectComponent } from './create-new-test-multiselect.component';

describe('CreateNewTestMultiselectComponent', () => {
  let component: CreateNewTestMultiselectComponent;
  let fixture: ComponentFixture<CreateNewTestMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTestMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTestMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
