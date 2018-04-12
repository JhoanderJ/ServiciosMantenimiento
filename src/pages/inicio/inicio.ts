import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramarservicioPage } from '../programarservicio/programarservicio';




@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  programarservicioPage = ProgramarservicioPage;
  listaServicios = [
    {

      nombre: 'PERSONAL DE MANTENIMIENTO',
      imagen: 'handyman.png'
      
    },
    {
      nombre: 'RECORRIDO LIMPIO',
      imagen: 'haul.png'
    },
    {
      nombre: 'ORGANIZAMOS TU HOGAR',
      imagen:  'home.png'
    },
    {
      nombre: 'LIMPIEZA',
      imagen:  'housekeeping.png'
    },
    {
      nombre: 'CÉSPED Y PATIO',
      imagen: 'lawn&yard.png'
    },
    {
      nombre: 'VARIEDAD',
      imagen: 'sunny.png'
    },
    {
      nombre: 'MOVER (EL MISMO SITIO)',
      imagen: 'move.png'
    }   
    ];


}
