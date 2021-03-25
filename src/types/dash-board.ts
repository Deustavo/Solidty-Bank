export interface Conta {
  id: number,
  lancamentos: Lancamento[],
  saldo: number,
}

export interface Lancamento {
  conta: number,
  data: string,
  descricao: string,
  id: number,
  planoConta: Plano,
  tipo: string,
  valor: number,
}

export interface Plano {
  descricao: string,
  id: number,
  login: string,
  padrao: boolean,
  tipoMovimento: string,
}

export interface Contas {
  contaBanco: Conta,
  contaCredito: Conta,
}