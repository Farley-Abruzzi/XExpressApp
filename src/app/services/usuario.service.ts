import { API_CONFIG } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../interfaces/usuario.dto';
import { environment } from '../../environments/environment.prod';
import { StorageService } from './storage.service';
import { Depositos } from '../class/depositos';
import { ImageUtilService } from './image-util.service';

const URL = environment.url;

@Injectable()
export class UsuarioService {

  constructor(public http: HttpClient,
    public storage: StorageService,
    public imageUtilService: ImageUtilService) {
  }

  findByEmail(email: string): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${ URL }/usuario/email?value=${email}`);
  }

  // =============================== Inserindo deposito com POST ===================================
  getApiDbPostDepositos(deposito: Depositos): Observable<Depositos> { // api base
    return this.http.post<Depositos>(`${ URL }/deposito`, deposito, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  uploadPicture(picture) {
    let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
    let formData: FormData = new FormData();
    formData.set('file', pictureBlob, 'file.png');
    return this.http.post(`${ URL }/deposito/picture`, formData,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}