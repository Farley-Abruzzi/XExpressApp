export class Recibos {
  nrorecibo: number;
  impresso: string;
  dtoperacao: Date;
  entrega: Date;
  formulario: number;
  nomenorecibo: string;
  entregaweb: string;
  dtcobranca: Date;
  datadorecebimento?: string;
  reagendado?: string;
  dtreagendamento?: Date;
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
  valorremarcado: number;
  dtremarc?: Date;
  codoperador: number;
  codcategoria: number;
  enderecosecundario: string;
  numerosecundario: string;
  bairrosecundario: string;
  cidadesecundario: string;
  complementosecundario: string;
  cepsecundario: string;
  telefonesecundario: string;
  desccategoria: string;
  observacoes: string;
  codmensageiro: number;
  codcontrib: number;
  codusuario: number;

  constructor(
    nrorecibo: number,
    impresso: string,
    dtoperacao: Date,
    entrega: Date,
    formulario: number,
    nomenorecibo: string,
    entregaweb: string,
    dtcobranca: Date,
    datadorecebimento: string,
    reagendado: string,
    dtreagendamento: Date,
    dtrecebimento: Date,
    valorgerado: number,
    valordinheiro: number,
    valorcheque: number,
    doacaoespecial: number,
    parceladoacaoespecial: string,
    aumentodefinitivo: number,
    dtoperacaobaixa: Date,
    periodicidade: number,
    valoralterado: number,
    valornaoalterado: number,
    dtvaloralteradobaixa: any,
    valorbakp: number,
    valorhorabkp: string,
    valordatabkp: Date,
    dataqld: Date,
    naorecebido: number,
    nrosorte: number,
    statusrec: string,
    dtbaixa: Date,
    parcela: string,
    via: number,
    motivodevol: string,
    valorremarcado: number,
    dtremarc: Date,
    codoperador: number,
    codcategoria: number,
    enderecosecundario: string,
    numerosecundario: string,
    bairrosecundario: string,
    cidadesecundario: string,
    complementosecundario: string,
    cepsecundario: string,
    telefonesecundario: string,
    desccategoria: string,
    observacoes: string,
    codmensageiro: number,
    codcontrib: number,
    codusuario: number) {

    this.nrorecibo = nrorecibo;
    this.impresso = impresso;
    this.dtoperacao = dtoperacao;
    this.entrega = entrega;
    this.formulario = formulario;
    this.nomenorecibo = nomenorecibo;
    this.entregaweb = entregaweb;
    this.dtcobranca = dtcobranca;
    this.datadorecebimento = datadorecebimento;
    this.reagendado = reagendado;
    this.dtreagendamento = dtreagendamento;
    this.dtrecebimento = dtrecebimento;
    this.valorgerado = valorgerado;
    this.valordinheiro = valordinheiro;
    this.valorcheque = valorcheque
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
    this.valorremarcado = valorremarcado;
    this.dtremarc = dtremarc;
    this.codoperador = codoperador;
    this.codcategoria = codcategoria;
    this.enderecosecundario = enderecosecundario;
    this.numerosecundario = numerosecundario;
    this.bairrosecundario = bairrosecundario;
    this.cidadesecundario = cidadesecundario;
    this.complementosecundario = complementosecundario;
    this.cepsecundario = cepsecundario;
    this.telefonesecundario = telefonesecundario;
    this.desccategoria = desccategoria;
    this.observacoes = observacoes;
    this.codmensageiro = codmensageiro;
    this.codcontrib = codcontrib;
    this.codusuario = codusuario;
  }


}

