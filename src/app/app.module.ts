import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  RegisterPage
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  RegisterPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
