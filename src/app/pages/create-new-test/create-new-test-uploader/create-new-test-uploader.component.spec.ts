import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTestUploaderComponent } from './create-new-test-uploader.component';

describe('CreateNewTestUploaderComponent', () => {
  let component: CreateNewTestUploaderComponent;
  let fixture: ComponentFixture<CreateNewTestUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewTestUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTestUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
