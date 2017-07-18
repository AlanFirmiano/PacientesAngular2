import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPacienteComponent } from './novo-paciente.component';

describe('NovoPacienteComponent', () => {
  let component: NovoPacienteComponent;
  let fixture: ComponentFixture<NovoPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
