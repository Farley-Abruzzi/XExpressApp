export class Devolvidos {
  nrorecibo: number;
  dtdevol: Date;
  horaoper: string;
  dtoperacao: Date;
  codoperador: number;
  codusuario: number;
  motivodevolucao: string;
  statendimento: number;
  dscatendimento: string;

  constructor(nrorecibo: number, dtdevol: Date, horaoper: string, dtoperacao: Date, codoperador: number, 
    codusuario: number, motivodevolucao: string, statendimento: number,
    dscatendimento: string) {

    this.nrorecibo = nrorecibo;
    this.dtdevol = dtdevol;
    this.horaoper = horaoper;
    this.dtoperacao = dtoperacao;
    this.codoperador = codoperador;
    this.codusuario = codusuario;
    this.motivodevolucao = motivodevolucao;
    this.statendimento = statendimento;
    this.dscatendimento = dscatendimento;
    
  }
}