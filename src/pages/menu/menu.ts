import { PageInterface } from './menu';
import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';



export interface PageInterface{
  tittle : string;
  pageName : string;
  tabComponent?: any;
  index?: number;
  icon: string;

}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild (Nav) nav: Nav;

  pages : PageInterface [] = [
    {tittle:'Configurar',pageName: 'TasbPage', tabComponent:'ConfigurarPage',index : 0, icon:'md-settings'},
    {tittle:'Ayuda',pageName: 'TasbPage', tabComponent:'AyudaPage',index : 1, icon:'md-help-buoy'},
    {tittle:'Inicio',pageName: 'TasbPage', tabComponent:'InicioPage',index : 2, icon:'md-home'},
    {tittle:'Trabajos',pageName: 'TasbPage', tabComponent:'TrabajosPage',index : 3, icon:'md-construct'},
    {tittle:'Favoritos',pageName: 'TasbPage', tabComponent:'FavoritosPage',index : 4, icon:'md-heart'},
    /*{tittle:'Programar tu servicio',pageName: 'TabsPage',icon:'home'},*/
    /*{tittle:'Proveedor',pageName: 'ProveedorPage', icon:'home'},*/
    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirPagina(page:PageInterface){
    let params = {};
    if(page.index){
      params = {tabIndex : page.index};
    }
    if(this.nav.getActiveChildNav() && page.index != undefined){
      this.nav.getActiveChildNav().select(page.index);
    }else{
      this.nav.setRoot(page.pageName,params);
    }
  }
  estaActivo(page:PageInterface){
    let childNav = this.nav.getActiveChildNav();
    
    if (childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'amarillo'
      }
      return;
    }
    if(this.nav.getActive()&& this.nav.getActive().name === page.pageName){
      return 'negro'
    }
  }
}
