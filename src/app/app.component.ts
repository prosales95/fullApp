import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import { MenuPage } from '../pages/menu/menu';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav : Nav;

  rootPage:any = HomePage;
  
  pages: Array <{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar:
    StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

//used for ex of ngFor and nav
this.pages = [
{title: 'Home', icon: 'home', component: HomePage},
{title: 'Info', icon: 'star',  component: InfoPage},
{title: 'Register', icon: 'heart', component: RegisterPage},
{title: 'About Us', icon: 'information-circle', component: AboutPage},
{title: 'Contact Us', icon: 'contact',  component: ContactPage},
{title: 'Menu', icon: 'list-box', component: MenuPage}

]
}

initializeApp () {
//platf ready and plugins availab
//here for any high level native process 
this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
}

openPage(page) {
  //reset content nav to just this page
  // no need back button to show in screen
  this.nav.setRoot(page.component)
}

}

