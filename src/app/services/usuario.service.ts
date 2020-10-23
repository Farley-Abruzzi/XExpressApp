import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { NavController } from '@ionic/angular';
import { CredenciaisDTO } from '../interfaces/credenciaisDTO';
import { Storage } from '@ionic/storage';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private usuario: CredenciaisDTO = {};

  constructor( private http: HttpClient, private storage: Storage, private navCtrl: NavController  ) { }

  login( email: string, password: string ) {

    const data = { email, password };

    return new Promise( resolve =>{

      this.http.post(`${ URL }/login`, data)
        .subscribe( async resp => {
          console.log(resp);
  
          if ( resp['ok'] ) {
            await this.guardarToken( resp['token'] );
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
  
        });

    });

  }

  logout() {
    this.token   = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  // registro( usuario: CredenciaisDTO ) {

  //   return new Promise( resolve =>{

  //     this.http.post(`${ URL }/user/create`, usuario)
  //       .subscribe( async resp =>{
          
  //         console.log(resp);

  //         if ( resp['ok'] ) {
  //           await this.guardarToken( resp['token'] );
  //           resolve(true);
  //         } else {
  //           this.token = null;
  //           this.storage.clear();
  //           resolve(false);
  //         }


  //       });

  //   });
  // }

  getUsuario() {

    if ( !this.usuario.email ) {
      this.authenticate();
    }

    return { ...this.usuario };

  }

  async guardarToken( token: string ) {
    
    this.token = token;
    await this.storage.set('token', token);

    await this.authenticate();

  }

  async carregarToken() {

    this.token = await this.storage.get('token') || null;

  }

  async authenticate(): Promise<boolean> {

    await this.carregarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve =>{

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${ URL }/auth/refresh_token`, { headers })
        .subscribe( resp =>{

          if ( resp['ok']) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });

    });

  }

  // atualizarUsuario( usuario: CredenciaisDTO ) {

  //   const headers = new HttpHeaders({
  //     'x-token': this.token
  //   });

  //   return new Promise<boolean>( resolve => {

  //     this.http.post(`${ URL }/user/update`, usuario, { headers })
  //       .subscribe( resp => {
  
  //         if ( resp['ok'] ) {
  //           this.guardarToken( resp['token'] );
  //           resolve(true);
  //         } else {
  //           resolve(false);
  //         }

  //       });

  //   });

  // }
}
