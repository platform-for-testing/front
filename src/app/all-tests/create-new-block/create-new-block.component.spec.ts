import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBlockComponent } from './create-new-block.component';

describe('CreateNewBlockComponent', () => {
  let component: CreateNewBlockComponent;
  let fixture: ComponentFixture<CreateNewBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
