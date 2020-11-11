import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../interfaces/usuario.dto';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';
import { Depositos } from '../class/depositos';

const URL = environment.url;

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient, public storage: StorageService) {
  }

  findByEmail(email: string): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${URL}/usuario/email?value=${email}`);
  }

  // =============================== Inserindo deposito com POST ===================================
  getApiDbPostDepositos(deposito: Depositos): Observable<Depositos> { // api base
    return this.http.post<Depositos>(`${URL}/deposito`, deposito, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}