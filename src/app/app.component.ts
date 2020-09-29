import { Component } from '@angular/core';

import { Platform, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [
    {
      title: 'Kur\'an-ı Kerim',
      url: '/home',
      color: '#0984e3',
      image: 'kuran'
    },
    {
      title: 'İncil (Matta)',
      url: '/home',
      color: '#ff7675',
      image: 'incil-matta'
    },
    {
      title: 'İncil (Markos)',
      url: '/home',
      color: '#00cec9',
      image: 'incil-markos',
    },
    {
      title: 'İncil (Luka)',
      url: '/home',
      color: '#fdcb6e',
      image: 'incil-luka'
    },
    {
      title: 'İncil (Yuhanna)',
      url: '/home',
      color: '#2d3436',
      image: 'incil-yuhanna'
    },
    {
      title: 'Tevrat',
      url: '/home',
      color: '#6c5ce7',
      image: 'tevrat'
    },
    {
      title: 'Zebur',
      url: '/home',
      color: '#d63031',
      image: 'zebur'
    }
  ];

  constructor(
    private platform: Platform,
    private events: Events,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      this.events.publish("setPage",{page: this.appPages[0]})
    });
  }

  openHomeWithState(page) {
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     page: page
    //   }
    // };
    // console.log(page)
    this.events.publish("setPage",{page: page})
    // this.router.navigate(['list'], navigationExtras);
  }

}
