export interface Resumo {
  mensageiro: string;
  qtdRecebido: number;
  valorRecebido: number;
  percentualRecebido: number;
  qtdDevolvido: number;
  valorDevolvido: number;
  percentualDevolvido: number;
  qtdCancelado: number;
  valorCancelado: number;
  percentualCancelado: number;
  qtdEmAberto: number;
  valorEmAberto: number;
  totalQtd: number;
  totalValorGerado: number;
  trabalhadas?: number;
}