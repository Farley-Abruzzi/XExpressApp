import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../interfaces/credenciaisDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';
import { LocalUser } from '../class/local_user';

const URL = environment.url;

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, public storage: StorageService) {
  }

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${URL}/login`, creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfullLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7);
    let user: LocalUser = {
      token: tok
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}