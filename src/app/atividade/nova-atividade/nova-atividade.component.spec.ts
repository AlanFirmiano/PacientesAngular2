import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAtividadeComponent } from './nova-atividade.component';

describe('NovaAtividadeComponent', () => {
  let component: NovaAtividadeComponent;
  let fixture: ComponentFixture<NovaAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
