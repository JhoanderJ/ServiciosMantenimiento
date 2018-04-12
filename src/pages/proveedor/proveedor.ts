
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController } from 'ionic-angular';
import { ConfirmarPage } from '../confirmar/confirmar';



@IonicPage()
@Component({
  selector: 'page-proveedor',
  templateUrl: 'proveedor.html',
})
export class ProveedorPage {

  confirmar:object;
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.confirmar=navParams.data;
  }
  abrirModal(){
    let modal = this.modalCtrl.create(ConfirmarPage);
    modal.present();
  }
  
  
}
