import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProveedorPage } from '../proveedor/proveedor';





@IonicPage()
@Component({
  selector: 'page-programarservicio',
  templateUrl: 'programarservicio.html',
})
export class ProgramarservicioPage {
  programars:object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              ) {
    this.programars=navParams.data;
  }
  mostrarProveedor(){
   this.navCtrl.push(ProveedorPage);
}
  

}
