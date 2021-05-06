import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resumo } from '../interfaces/resumo';
import { ResumoPorCidade } from '../interfaces/resumoPorCidade';
import { ActivatedRoute, Router } from '@angular/router';
import { Recibos } from '../class/recibos';
import { Devolvidos } from '../Class/devolvidos';
import { ResumoDTO } from '../interfaces/resumoDTO';
import { Contribuintes } from '../class/contribuintes';
import { Recibo } from '../class/recibo';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ContribuintesService {

  dtInicio:string;
  dtFim:string;

  
  constructor( private http: HttpClient, private route: ActivatedRoute, private router: Router ) { }

  
  // Pega as informações de recibos dos contribuintes no WebServices. 
  getListaRecibos(cod: number, bairro: string) {
    // http://192.168.0.243:8081/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31
    return this.http.get<Recibos[]>(`${ URL }/recibos/listarecibosapp?cod=${ cod }&startDate=2021-04-01&endDate=2021-04-30&bairro=${ bairro }`);
  }
  // Detalhes do recibo.
  getRecibosDetalhe( nrorecibo: number ) {
    // http://192.168.0.243:8081/recibos/app/11382872
    return this.http.get<Recibos>(`${ URL }/recibos/app/${ nrorecibo }`);
  }
  // Pega as informações de resumo do mensageiro no WebServices.
  getResumo(cod: number, dtStart: string, dtEnd: string) {
    this.dtInicio = dtStart;
    this.dtFim = dtEnd;
    // http://192.168.0.243:8081/recibos/resumomensageiro?cod=11&startDate=2017-01-01&endDate=2018-01-01
    return this.http.get<Resumo>(`${ URL }/recibos/resumomensageiro?cod=${ cod }&startDate=${ dtStart }&endDate=${ dtEnd }`);
  }

  getResumoBaixados(cod: number, dtStart: string, dtEnd: string) {
    return this.http.get<ResumoDTO[]>(`${ URL }/recibos/resumorecibosbaixadosapp?cod=${ cod }&startDate=${ dtStart }&endDate=${ dtEnd }`);
  }
  // Pega as informações de resumo do mensageiro por cidade.
  getResumoPorCidade(cod: number) {
    // http://192.168.0.243:8081/recibos/mensageiroporcidade1?cod=630&startDate=2019-01-01&endDate=2019-03-10
    return this.http.get<ResumoPorCidade>(`${ URL }/recibos/mensageiroporcidade1?cod=${ cod }&startDate=${ this.dtInicio }&endDate=${ this.dtFim }`);
  }

  // Atualiza os recibos no BD
  putRecibo(recibo: Recibos) {
    // http://localhost:8081/recibos/11369854
    return this.http.put<Recibos>(`${ URL }/recibos/${ recibo.nrorecibo }`, recibo, {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json' 
      })
    });
  }
  // Cria recibos devolvidos
  postDevolvidos(devolvido: Devolvidos) {
    // http://192.168.0.243:8081/devolvido/17044484
    return this.http.post<Devolvidos>(`${ URL }/devolvido`, devolvido, {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    });
  }

  //Inserir novo contribuinte
  postContribuinte(contribuinte: Contribuintes) {
    return this.http.post<Contribuintes>(`${ URL }/contribuintes`, contribuinte, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Inserir novo recibo
  postReciboGerado(recibo: Recibos) {
    return this.http.post<Recibos>(`${ URL }/recibos`, recibo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  //buscar pelo ultimo id
  getUltRecibo(cod: number, dtOp: string) {
    return this.http.get<Recibos>(`${ URL }/recibos/ultrecibo?cod=${ cod }&dtOp=${ dtOp }`);
  }

  //busca pelo ultimo id
  getUltContribuinte() { // api base
    //console.log(id);
    return this.http.get<Contribuintes>(`${ URL }/contribuintes/ultcontrib`);
  }


}
