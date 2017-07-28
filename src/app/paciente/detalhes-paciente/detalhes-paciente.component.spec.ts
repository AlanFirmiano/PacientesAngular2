import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPacienteComponent } from './detalhes-paciente.component';

describe('DetalhesPacienteComponent', () => {
  let component: DetalhesPacienteComponent;
  let fixture: ComponentFixture<DetalhesPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
