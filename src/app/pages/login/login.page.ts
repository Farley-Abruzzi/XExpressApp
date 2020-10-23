import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { CredenciaisDTO } from '../../interfaces/credenciaisDTO';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: false}) slides: IonSlides;


  loginUser: CredenciaisDTO = {
    email: '',
    password: ''
  };
  
  slidesOpts: any = {allowTouchMove: false};

  LockSwipes( lock: boolean ) {
    if(lock === true) {
      this.slidesOpts = {allowTouchMove: true};
    } else {
      this.slidesOpts = {allowTouchMove: false};
    }
  }

  constructor( private usuarioService: UsuarioService, 
               private navCtrl: NavController,
               private uiService: UiServiceService,
               private auth: AuthService) { }
  

  ngOnInit() {
    
  }

  logar() {
    
    this.auth.authenticate(this.loginUser)
      .subscribe(resp => {
        console.log(resp.headers.get('Authorization'));
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
      },
        error => {});
  }


  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );
    
    if ( valido ) {
      // Navegar para tabs
      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );
    } else {
      // Alerta de usuario e contrasenha incorretos.
      this.uiService.alertaInformativo('Usuário e contra/senha não são corretos.'); 
    }

  }

  
//   mostrarLogin() {
//     this.slidesOpts = {allowTouchMove: true};
//     this.slides.slideTo(1);
    
// }

}