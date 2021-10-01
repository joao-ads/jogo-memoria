import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiniciarJogoComponent } from './reiniciar-jogo.component';

describe('ReiniciarJogoComponent', () => {
  let component: ReiniciarJogoComponent;
  let fixture: ComponentFixture<ReiniciarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReiniciarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiniciarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
