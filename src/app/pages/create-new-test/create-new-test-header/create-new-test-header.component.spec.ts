import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestHeaderComponent } from './create-new-test-header.component';

describe('CreateNewTestHeaderComponent', () => {
  let component: CreateNewTestHeaderComponent;
  let fixture: ComponentFixture<CreateNewTestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
