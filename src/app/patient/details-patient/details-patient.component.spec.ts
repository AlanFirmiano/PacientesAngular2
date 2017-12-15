import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPatientComponent } from './details-patient.component';

describe('DetailsPatientComponent', () => {
  let component: DetailsPatientComponent;
  let fixture: ComponentFixture<DetailsPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
