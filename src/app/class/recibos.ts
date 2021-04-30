export class Recibos {
  nrorecibo: number;
  impresso: string;
  dtoperacao: Date;
  entrega: Date;
  formulario: number;
  nomenorecibo: string;
  entregaweb: string;
  dtcobranca: Date;
  dtrecebimento?: Date;
  valorgerado: number;
  valordinheiro: number;
  valorcheque: number
  doacaoespecial: number;
  parceladoacaoespecial: string;
  aumentodefinitivo: number;
  dtoperacaobaixa?: Date;
  periodicidade: number;
  valoralterado: number;
  valornaoalterado: number;
  dtvaloralteradobaixa: any;
  valorbakp: number;
  valorhorabkp: string;
  valordatabkp?: Date;
  dataqld?: Date;
  naorecebido: number;
  nrosorte: number;
  statusrec: string;
  dtbaixa?: Date;
  parcela: string;
  via: number;
  motivodevol?: string;
  dtremarc?: Date;
  valorremarcado?: number;
  codoperador: number;
  codmensageiro: number;
  codcategoria: number;
  dtreagendamento?: Date;
  reagendado?: string;
  codcontrib: number;
  codusuario: number;
  enderecosecundario: string;
  numerosecundario: string;
  bairrosecundario: string;
  cidadesecundario: string;
  complementosecundario: string;
  cepsecundario: string;
  telefonesecundario: string;
  desccategoria: string;
  observacoes: string;
  datadorecebimento?: string;
  
  
  constructor(nrorecibo: number, impresso: string, dtoperacao: Date, entrega: Date, formulario: number, nomenorecibo: string, entregaweb: string,
    dtcobranca: Date, dtrecebimento: Date, valorgerado: number, valordinheiro: number, valorcheque: number, doacaoespecial: number,
    parceladoacaoespecial: string, aumentodefinitivo: number, dtoperacaobaixa: Date, periodicidade: number, valoralterado: number,
    valornaoalterado: number, dtvaloralteradobaixa: any, valorbakp: number, valorhorabkp: string, valordatabkp: Date, dataqld: Date,
    naorecebido: number, nrosorte: number, statusrec: string, dtbaixa: Date, parcela: string, via: number, motivodevol: string, dtremarc: Date,
    valorremarcado: number, codoperador: number, codmensageiro: number, codcategoria: number, dtreagendamento: Date, reagendado: string,
    codcontrib: number, codusuario: number, enderecosecundario: string, numerosecundario: string, bairrosecundario: string, cidadesecundario: string,
    complementosecundario: string, cepsecundario: string, telefonesecundario: string, desccategoria: string, observacoes: string, datadorecebimento: string) {

  this.nrorecibo = nrorecibo;           
  this.impresso = impresso;
  this.dtoperacao = dtoperacao;
  this.entrega = entrega;
  this.formulario = formulario;
  this.nomenorecibo = nomenorecibo;
  this.entregaweb = entregaweb;
  this.dtcobranca = dtcobranca;
  this.dtrecebimento = dtrecebimento;
  this.valorgerado = valorgerado;
  this.valordinheiro = valordinheiro;
  this.valorcheque = valorcheque;
  this.doacaoespecial = doacaoespecial;
  this.parceladoacaoespecial = parceladoacaoespecial;
  this.aumentodefinitivo = aumentodefinitivo;
  this.dtoperacaobaixa = dtoperacaobaixa;
  this.periodicidade = periodicidade;
  this.valoralterado = valoralterado;
  this.valornaoalterado = valornaoalterado;
  this.dtvaloralteradobaixa = dtvaloralteradobaixa;
  this.valorbakp = valorbakp;
  this.valorhorabkp = valorhorabkp;
  this.valordatabkp = valordatabkp;
  this.dataqld = dataqld;
  this.naorecebido = naorecebido;
  this.nrosorte = nrosorte;
  this.statusrec = statusrec;
  this.dtbaixa = dtbaixa;
  this.parcela = parcela;
  this.via = via;
  this.motivodevol = motivodevol;
  this.dtremarc = dtremarc;
  this.valorremarcado = valorremarcado;
  this.codoperador = codoperador;
  this.codmensageiro = codmensageiro;
  this.codcategoria = codcategoria;
  this.dtreagendamento = dtreagendamento;
  this.reagendado = reagendado;
  this.codcontrib = codcontrib;
  this.codusuario = codusuario;
  this.enderecosecundario = enderecosecundario;
  this.numerosecundario = numerosecundario;
  this.bairrosecundario = bairrosecundario;
  this.cidadesecundario = cidadesecundario;
  this.complementosecundario = complementosecundario;
  this.cepsecundario = cepsecundario;
  this.telefonesecundario = telefonesecundario;
  this.desccategoria = desccategoria;
  this.observacoes = observacoes;
  this.datadorecebimento = datadorecebimento;
  }


}

