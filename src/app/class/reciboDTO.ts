export class ReciboDTO {
nrorecibo: number;
nomenorecibo: string;
entregaweb: string;
dtcobranca: Date;
reagendado: string;
dtreagendamento: Date;
valorgerado: number;
statusrec: string;
dtbaixa: Date;
parcela: string;
via: number;
motivodevol: string;
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
  
  constructor(nrorecibo: number, nomenorecibo: string, entregaweb: string, dtcobranca: Date, reagendado: string, dtreagendamento: Date,
    valorgerado: number, statusrec: string, dtbaixa: Date, parcela: string, via: number, motivodevol: string, enderecosecundario: string,
    numerosecundario: string, bairrosecundario: string, cidadesecundario: string, complementosecundario: string, cepsecundario: string,
    telefonesecundario: string, desccategoria: string, observacoes: string, codmensageiro: number, codcontrib: number) {
    
    this.nrorecibo = nrorecibo;
    this.nomenorecibo = nomenorecibo;
    this.entregaweb = entregaweb; 
    this.dtcobranca = dtcobranca;
    this.reagendado = reagendado; 
    this.dtreagendamento = dtreagendamento;
    this.valorgerado = valorgerado; 
    this.statusrec = statusrec; 
    this.dtbaixa = dtbaixa;
    this.parcela = parcela; 
    this.via = via;
    this.motivodevol = motivodevol; 
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
  }
  
}