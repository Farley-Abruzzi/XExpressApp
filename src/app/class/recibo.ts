export class Recibo {
  nrorecibo: number;
  impresso: string;
  dtoperacao: Date;
  statusrec: string;
  entrega: Date;
  formulario: number;
  nomenorecibo: string;
  dtcobranca: Date;
  dtrecebimento: Date;
  dtbaixa: Date;
  parcela: string;
  via: number;
  valordinheiro: number;
  valorcheque: number;
  valorgerado: number;
  doacaoespecial: number;
  parceladoacaoespecial: string;
  aumentodefinitivo: number;
  dtoperacaobaixa: Date;
  periodicidade: number;
  codusuario: number; //
  codcampanha: number; //
  valoralterado: number;
  valornaoaltera: number;
  entregaweb: string;
  dtvaloralteradobaixa: Date;
  valorbakp: number;
  valorhorabkp: string
  valordatabkp: Date;
  codusuarioqld: number; //
  dataqld: Date;
  codatendimento: number; //
  naorecebido: number;
  nrosorte: number;
  motivodevol: string;
  dtremarc: Date;
  operadoraboleto: number; //
  parcelaremarcada: number;
  valorremarcado: number;
  mesanoref: string;
  operadoraremarc: number; //
  usuarioremarc: number; //
  operadoradeposito: number; //
  inseriucofrinho: number; //
  reagendado: string;
  dtreagendamento: Date;
  codoperador: number;
  codmensageiro: number;
  codcategoria: number;
  codcontrib: number;
 
  constructor() {
  }
}