import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  pontosTime1 = 0;
  pontosTime2 = 0;
  partidasTime1 = 0;
  partidasTime2 = 0;

  constructor(private alertaVitoria: AlertController) {}

  resetarValendo(){
    this.valendo = 1;
  }

  chamarTruco(){
    this.valendo = 3
  }
  chamarTruco6(){
    this.valendo = 6
  }
  chamarTruco9(){
    this.valendo = 9
  }
  chamarTruco12(){
    this.valendo = 12
  }

  adicionarPontosTime1(){
    this.pontosTime1 = this.pontosTime1 + this.valendo;
    this.valendo = 1;
    if (this.pontosTime1 >= 12){
      this.alertaVit1();
      this.partidasTime1 = this.partidasTime1 + 1;
      this.pontosTime1 = 0;
      this.pontosTime2 = 0;
    }
  }
  adicionarPontosTime2(){
    this.pontosTime2 = this.pontosTime2 + this.valendo;
    this.valendo = 1;
    if (this.pontosTime2 >= 12){
      this.alertaVit2();
      this.partidasTime2 = this.partidasTime2 + 1;
      this.pontosTime1 = 0;
      this.pontosTime2 = 0;
    }
  }

  removerPontosTime1(){
    if(this.pontosTime1 > 0){
      this.pontosTime1 = this.pontosTime1 - this.valendo;
      this.valendo = 1;
    }if(this.pontosTime1 < 0){
      this.pontosTime1 = 0;
    }
  }
  removerPontosTime2(){
    if(this.pontosTime2 > 0){
      this.pontosTime2 = this.pontosTime2 - this.valendo;
      this.valendo = 1;
    }if(this.pontosTime2 < 0){
      this.pontosTime2 = 0
    }
  }

  zerar(){
    this.valendo = 1;
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;
    this.partidasTime1 = 0;
    this.partidasTime2 = 0;
  }
  async alertaVit1() {
    const alert = await this.alertaVitoria.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();

  }
  async alertaVit2() {
    const alert = await this.alertaVitoria.create({
      header: 'Vitoria?',
      message: 'O Time 2 Realmente ganhou?',
      buttons: [{
        text: 'NÃO',
        role: 'CANCEL'
      },{
        text: 'SIM',
        role: 'confirm'
      }],
    });

    await alert.present();

  }

}

