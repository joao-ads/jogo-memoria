import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carta } from '../carta.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
  animations: [
    trigger('cartaVira', [
      state('verso', style({
        transform: 'none',
      })),
      state('frente', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('par', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('verso => frente', [
        animate('400ms')
      ]),
      transition('frente => verso', [
        animate('400ms')
      ]),
      transition('* => par', [
        animate('400ms')
      ])
    ])
  ]
})

export class CartaComponent implements OnInit {
  
  @Input() carta: Carta;
  
  @Output() cartaClicada = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
