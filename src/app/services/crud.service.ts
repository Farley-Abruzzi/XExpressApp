import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Recibos } from '../class/recibos';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Devolvidos } from '../Class/devolvidos';
import { DepositoDTO } from '../class/depositoDTO';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  qtdRecibos: any;
  valorDeposito: any;

  constructor( private dbService: DatabaseService, private datePipe: DatePipe ) { }

  // Método para inserir recibos no banco do app
  async insert( recibos: Recibos ) {

    try {
      const db = await this.dbService.getDB();
      let sql = 'insert into recibos (nrorecibo, impresso, dtoperacao, entrega, formulario, nomenorecibo, entregaweb, dtcobranca, dtrecebimento, valorgerado, valordinheiro, '
        + 'valorcheque, doacaoespecial, parceladoacaoespecial, aumentodefinitivo, dtoperacaobaixa, periodicidade, valoralterado, valornaoalterado, dtvaloralteradobaixa, valorbakp, valorhorabkp, '
        + 'valordatabkp, dataqld, naorecebido, nrosorte, statusrec, dtbaixa, parcela, via, motivodevol, valorremarcado, dtremarc, codoperador, codmensageiro, codcategoria, dtreagendamento, reagendado, codcontrib, codusuario, enderecosecundario, numerosecundario, '
        + 'bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, observacoes, datadorecebimento) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      let data = [recibos.nrorecibo, recibos.impresso, recibos.dtoperacao, recibos.entrega, recibos.formulario, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.dtrecebimento, recibos.valorgerado, recibos.valordinheiro,
        recibos.valorcheque, recibos.doacaoespecial, recibos.parceladoacaoespecial, recibos.aumentodefinitivo, recibos.dtoperacaobaixa, recibos.periodicidade, recibos.valoralterado, recibos.valornaoalterado, recibos.dtvaloralteradobaixa, recibos.valorbakp, recibos.valorhorabkp,
        recibos.valordatabkp, recibos.dataqld, recibos.naorecebido, recibos.nrosorte, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.valorremarcado, recibos.dtremarc, recibos.codoperador, recibos.codmensageiro, recibos.codcategoria, recibos.dtreagendamento,
        recibos.reagendado, recibos.codcontrib, recibos.codusuario, recibos.enderecosecundario, recibos.numerosecundario, recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria,
        recibos.observacoes, recibos.datadorecebimento];
      try {
        await db.executeSql(sql, data);
        // console.log('Recibos inseridos');
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e_1) {
      return console.error(e_1);
    }
  }

  // Método para inserir recibos devolvidos no BD do App
  async insertDevolvidos( devolvidos: Devolvidos ) {

    try {
      const db = await this.dbService.getDB();
      let sql = 'insert into recibosDevolvidos (nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, '
      + 'motivodevolucao, statendimento, dscatendimento) values(?,?,?,?,?,?,?,?,?)';
      let data = [devolvidos.nrorecibo, devolvidos.dtdevol, devolvidos.horaoper, devolvidos.dtoperacao, devolvidos.codoperador, devolvidos.codusuario, devolvidos.motivodevolucao,
        devolvidos.statendimento, devolvidos.dscatendimento];
      try {
        await db.executeSql(sql, data);
        // console.log('Recibos inseridos');
      }
      catch (e) {
        return console.error(e);
      }
    }
    catch (e_1) {
      return console.error(e_1);
    }
  }

 // Para selecionar todos os recibos com status de Gerado no banco do app
  async getAll() {
    return await this.dbService.getDB().then((db: SQLiteObject) => {
      let sql = "select * from recibos where statusrec = 'G' ORDER BY dtcobranca ASC";
      let data: any[];
      return db.executeSql(sql, data)
        .then((data: any) => {
          if (data.rows.length > 0) {
            var recibos = new Array<Recibos>();
            for (let i = 0; i < data.rows.length; i++) {
              let tmp = data.rows.item(i);
              var recibo = new Recibos(tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro,
                tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp,
                tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario,
                tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento)
              recibos.push(recibo);
              console.log('Consulta realizada!');
            }
            return recibos;
          } else {
            console.log('return new array<Recibos>');
            return new Array<Recibos>();
          }
        }).catch(e => {
          console.error(e);
        });
    }).catch(e => {
      console.error(e);
    });
  }

  // Consulta DB do app para comparar dados com o DB da aplicação e fazer o comunicado de deposito
  async getForDeposito(datadorecebimento: string) {
    // dtbaixa.toISOString();
    console.log('DTBAIXA: ', datadorecebimento);
    return await this.dbService.getDB().then((db: SQLiteObject) => {
      let sql = "SELECT count(*) AS Qtd, sum(valorgerado) AS Total FROM recibos WHERE datadorecebimento = ? AND statusrec = 'B'";
      let data = [datadorecebimento];
        return db.executeSql(sql, data)
          .then((data: any) => {
            var depositos = new Array<DepositoDTO>();
            if (data.rows.length > 0) {
              //let item = data.rows.item(0);
              var deposito = new DepositoDTO();
              deposito.qtdRecibos = data.rows.item(0).Qtd;
              deposito.totalArrecadado = data.rows.item(0).Total;
              console.log('Consulta realizada: ', deposito.qtdRecibos, deposito.totalArrecadado);
              depositos.push(deposito);    
          } 
            return depositos;
        }).catch(e => {
          console.error(e);
        });
    }).catch(e => {
      console.error(e);
    });
  }

  // Para selecionar o recibo por id(nrorecibo)
  async getById( nrorecibo: number ) {
    return await this.dbService.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from recibos where nrorecibo = ?';
        let data = [nrorecibo];
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let tmp = data.rows.item(0);
              let recibo = new Recibos(tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro,
                tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp,
                tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario,
                tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento)
              console.log('Consulta realizada');
              return recibo;
            } else {
              return null;
            }
          }).catch(
            e => console.error(e)
          );
      }).catch(
        e => console.error(e)
      );
  }

  // Para atualizar o recibo nos casos de (Doação, Reagendamento ou Devolução)
  update( recibo: Recibos, option: string ) {
    return this.dbService.getDB().then(
      (db: SQLiteObject) => { 
        let sql;
        let data;

        switch(option)  {

          case 'doacao':{
            sql = 'UPDATE recibos SET valorgerado  = ?, statusrec = ?, datadorecebimento = ?, dtbaixa = ?, motivodevol = ? WHERE nrorecibo = ?';
            data = [recibo.valorgerado, recibo.statusrec, recibo.datadorecebimento, recibo.dtbaixa, recibo.motivodevol, recibo.nrorecibo]
            break;
          }
          
          case 'reagendamento':{
            sql = 'UPDATE recibos SET reagendado = ?, dtreagendamento = ? WHERE nrorecibo = ?';
            data = [recibo.reagendado, recibo.dtreagendamento, recibo.nrorecibo]
            break;
          }
          
          case 'devolucao':{
            sql = 'UPDATE recibos SET statusrec = ? WHERE nrorecibo = ?';
            data = [recibo.statusrec, recibo.nrorecibo]
            break;
          }
        }

        return db.executeSql(sql, data).then(
          () => console.log("Recibo Atualizado")
        ).catch(
          e => console.error(e)
        ); //passar parametro e a string;
      }
    ).catch(e => console.error(e));
  }

  async getByBairro(bairro: string) {
    console.log('BAIRRO NO CRUD: ', bairro);
    return await this.dbService.getDB().then((db: SQLiteObject) => {
        let sql = "SELECT * FROM recibos WHERE bairrosecundario = ? AND statusrec = 'G' ORDER BY dtcobranca ASC";
        let data = [bairro];
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              var recibos = new Array<Recibos>();
            for (let i = 0; i < data.rows.length; i++) {
              let tmp = data.rows.item(i);
              var recibo = new Recibos(tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro,
                tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp,
                tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario,
                tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento)
              recibos.push(recibo);
              console.log('Consulta realizada!');
            }
            return recibos;
          } else {
            return null;
          }
        }).catch(
          e => console.error(e)
        );
    }).catch(
      e => console.error(e)
    );
  }
  
}
