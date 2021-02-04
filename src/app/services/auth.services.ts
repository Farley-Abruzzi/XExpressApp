import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../interfaces/credenciaisDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { LocalUser } from '../interfaces/local_user';
import { JwtHelperService  } from '@auth0/angular-jwt';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  jwtHelperService: JwtHelperService  = new JwtHelperService ();

  constructor(public http: HttpClient, public storage: StorageService) {
  }

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${ URL }/login`, creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  refreshToken() {
    return this.http.post(`${ URL }/auth/refresh_token`,{},
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfullLogin(authorization: string) {
    let tok = authorization.substring(7);
    let user: LocalUser = {
      token: tok,
      email: this.jwtHelperService.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
    console.log('User: ', user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}