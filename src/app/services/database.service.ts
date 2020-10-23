import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private sqlite: SQLite ) { }

  // Criar um banco de dados se for executado pela primeira vez
  public getDB() {
    return this.sqlite.create({
      name: 'dbXexpress.db',
      location: 'default',
    });
  }

  public async createDataBase() {
    // Usar o conceito de promisses
    // Se der erro será usado o catch
    try {
      const db = await this.getDB();
      this.createTables(db);
    }
    catch (e) {
      return console.error(e);
    }
  }

  private async createTables(db: SQLiteObject) {

    // Usar sqlBatch para criação das tabelas
    try {
      await db.sqlBatch([
        'CREATE TABLE IF NOT EXISTS recibos( '
        + 'nrorecibo INTEGER NOT NULL PRIMARY KEY, '
        + 'nomenorecibo VARCHAR(100), '
        + 'entregaweb VARCHAR(1), '
        + 'dtcobranca DATE, '
        + 'reagendado VARCHAR(1), '
        + 'dtreagendamento DATE, '
        + 'valorgerado REAL(6), '
        + 'statusrec VARCHAR(1), '
        + 'dtbaixa DATE, '
        + 'parcela VARCHAR(8), '
        + 'via INTEGER, '
        + 'motivodevol VARCHAR(100), '
        + 'enderecosecundario VARCHAR(100), '
        + 'numerosecundario VARCHAR(8), '
        + 'bairrosecundario VARCHAR(100), '
        + 'cidadesecundario VARCHAR(100), '
        + 'complementosecundario VARCHAR(100), '
        + 'cepsecundario VARCHAR(100), '
        + 'telefonesecundario VARCHAR(100), '
        + 'desccategoria VARCHAR(30), '
        + 'observacoes VARCHAR(300), '
        + 'envioservidor VARCHAR(1), ' // Campo será usado no futuro para confirmar envio
        + 'codmensageiro INTEGER);',
        
        'CREATE TABLE IF NOT EXISTS recibosDevolvidos( '
        + 'nrorecibo INTEGER NOT NULL PRIMARY KEY, '
        + 'dtdevol DATE, '
        + 'horaoper VARCHAR(10), '
        + 'dtoperacao DATE, '
        + 'codoperador INTEGER, '
        + 'codusuario INTEGER, '
        + 'motivodevolucao VARCHAR(100), '
        + 'statendimento INTEGER, '
        + 'envioservidor VARCHAR(1), ' //Campo será utilizado no futuro para confirmar envio
        + 'dscatendimento VARCHAR(300));'
      ]);
      console.log('Tables ok/success');
    }
    catch (e) {
      return console.error(e);
    }
  }
}
