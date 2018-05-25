import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  RegisterPage,
  InfoPage,
  AboutPage,
  MenuPage,
  ContactPage
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
  RegisterPage,
  InfoPage,
  InfoPage,
  AboutPage,
  MenuPage,
  ContactPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
