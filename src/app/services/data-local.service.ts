import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resumo } from '../interfaces/resumo';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  objetos: Resumo[] = [];

  constructor( private storage: Storage ) { }

  guardarRecibos( objetos: Resumo ) {
    this.objetos.push( objetos );
    this.storage.set('objetos', this.objetos );
  }
}
