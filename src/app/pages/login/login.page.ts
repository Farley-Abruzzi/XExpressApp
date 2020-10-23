import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { CredenciaisDTO } from '../../interfaces/credenciaisDTO';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds: CredenciaisDTO = {
    email: '',
    password: ''
  };
  
 
  constructor( private navCtrl: NavController,
               private auth: AuthService) { }
  

  ngOnInit() {
    
  }

  logar() {
    this.auth.authenticate(this.creds)
      .subscribe(resp => {
        console.log(resp.headers.get('Authorization'));
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
      },
        error => {});
  }


  // async login( fLogin: NgForm ) {

  //   if ( fLogin.invalid ) { return; }

  //   const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );
    
  //   if ( valido ) {
  //     // Navegar para tabs
  //     this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
  //   } else {
  //     // Alerta de usuario e contrasenha incorretos.
  //     this.uiService.alertaInformativo('Usuário e contra/senha não são corretos.'); 
  //   }

  // }

  
//   mostrarLogin() {
//     this.slidesOpts = {allowTouchMove: true};
//     this.slides.slideTo(1);
    
// }

}