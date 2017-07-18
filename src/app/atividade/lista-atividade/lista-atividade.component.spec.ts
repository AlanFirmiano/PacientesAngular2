import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtividadeComponent } from './lista-atividade.component';

describe('ListaAtividadeComponent', () => {
  let component: ListaAtividadeComponent;
  let fixture: ComponentFixture<ListaAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
