import { Injectable } from '@angular/core';
import { CredenciaisDTO } from '../interfaces/credenciaisDTO';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;

@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {
  }

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(`${URL}/login`, creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }
}