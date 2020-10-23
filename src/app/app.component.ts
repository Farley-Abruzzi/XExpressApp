import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private database: DatabaseService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.database.createDataBase().then(() => {
        
        this.abrirPage(this.splashScreen);
        console.log('Tabela criada');
      }).catch(e => {
        this.abrirPage(this.splashScreen);
        console.error(e);
      });

      // this.checkDarkTheme();
    });
  }

  abrirPage( splashScreen: SplashScreen ) {
    splashScreen.hide();
  }
  // Ativador automático do tema dark, quando este reconhece que o tema do sistema do usuário também é dark.
  // checkDarkTheme() {
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //   if (prefersDark.matches ) {
  //     document.body.classList.toggle( 'dark' );
  //   }
  // }
}
