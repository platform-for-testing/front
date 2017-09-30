import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllActivationsComponent } from './all-activations.component';

describe('AllActivationsComponent', () => {
  let component: AllActivationsComponent;
  let fixture: ComponentFixture<AllActivationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllActivationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllActivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
