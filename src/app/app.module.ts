
import { ProgramarservicioPage } from './../pages/programarservicio/programarservicio';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProveedorPage } from '../pages/proveedor/proveedor';
import { ConfirmarPage } from '../pages/confirmar/confirmar';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProgramarservicioPage,
    ProveedorPage,
    ConfirmarPage
  
  ],
  imports: [
   
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProgramarservicioPage,
    ProveedorPage,
    ConfirmarPage
    
    
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
