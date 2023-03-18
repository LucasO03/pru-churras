import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  tamanho = 6;
  valorAtual = 0;
  imgsDado =[
    'assets/dice-red.png', // Posição 0
    'assets/dice.gif' // Posição 1
  ]
  imagemDado = this.imgsDado[0];

  jogarDado(){
    this.valorAtual = 0;
    this.imagemDado = this.imgsDado[1];
    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho) + 1;
    }, 1000)
  }
}
