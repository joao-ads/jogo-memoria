import { Component } from '@angular/core';
import { Carta } from './carta.model';
import { MatDialog } from '@angular/material/dialog';
import { ReiniciarJogoComponent } from './reiniciar-jogo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  idCartas = [
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
  ];

  cartas: Carta[] = [];

  inverterCartas: Carta[] = [];

  ngOnInit(): void {
    this.carregarCartas();
  }

  constructor(private dialog: MatDialog) {

  }

  carregarCartas(): void {
    this.cartas = [];

    this.idCartas.forEach((image) => {
      const carta: Carta = {
        idImagem: image,
        state: 'verso'
      };
      this.cartas.push({ ...carta });
      this.cartas.push({ ...carta });
    });

    this.cartas = this.embaralhaCartas(this.cartas);
  }

  embaralhaCartas(arrayCartas: any[]): any[] {
    return arrayCartas.map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
  }

  cartaClicada(index: number): void {
    const cartaInfo = this.cartas[index];
    
    if (cartaInfo.state === 'verso' && this.inverterCartas.length < 2)      
    {
      cartaInfo.state = 'frente';
      this.inverterCartas.push(cartaInfo);
      
      if (this.inverterCartas.length > 1) {
        this.checarPar();
     }
     
    } else if (cartaInfo.state === 'frente') {
      cartaInfo.state = 'verso';
      this.inverterCartas.pop();
    }
  }
  
  contagemPares = 0;

  checarPar(): void {
    setTimeout(() => {
      
      const cartaUm = this.inverterCartas[0];
      const cartaDois = this.inverterCartas[1];
      const proximoStatus = cartaUm.idImagem === cartaDois.idImagem ? 'par' : 'verso';
      cartaUm.state = cartaDois.state = proximoStatus;
      
      this.inverterCartas = [];
      
      if (proximoStatus === 'par') {
        this.contagemPares++;
        
        if (this.contagemPares === this.idCartas.length) {
          const cxDialogo = this.dialog.open(ReiniciarJogoComponent, {
            disableClose: true
          });
          cxDialogo.afterClosed().subscribe(() => {
            this.reiniciar();
          });
        }
      }
    }, 1000);
  }

  reiniciar(): void {
    this.contagemPares = 0;
    this.carregarCartas();
}


  title = 'Memory-game';
}
