import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CredenciaisDTO } from '../../interfaces/credenciaisDTO';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO = {
    email: "",
    password: ""
  };
  
 
  constructor( private navCtrl: NavController, private auth: AuthService, private toastCtrl: ToastController) { }
  

  ngOnInit() {
    this.auth.refreshToken()
      .subscribe(resp => {
        this.auth.successfullLogin(resp.headers.get("Authorization"));
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
      },
        error => {});
  }

  logar() {
    this.creds.email = this.creds.email.trim();
    console.log('CREDS: ', this.creds);
    this.auth.authenticate(this.creds)
      .subscribe(resp => {
        console.log('OBJ CREDS: ', this.creds);
        this.auth.successfullLogin(resp.headers.get("Authorization"));
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
      },
        error => {
          console.log(error);
          this.presentToast('Erro: ' + error);
      });
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      mode: "ios",
      color: "light"
    });
    toast.present();
  }

}