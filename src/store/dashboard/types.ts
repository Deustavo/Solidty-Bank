import { Contas, Plano } from "../../types/dash-board"

export enum DashboardActions {
  CHANGE_SCREEN = "CHANGE_SCREEN",
  INSERT_TRANSACTION_DATA = "INSERT_TRANSACTION_DATA",
  INSERT_PLANS_DATA = "INSERT_PLANS_DATA",
}

export type Screen =
  | "VisaoGeral"
  | "ContaCorrente"
  | "AdicionarFundos"
  | "CartaoCredito"
  | "PagarFatura"
  | "Tranferencia"
  | "Plans"

export interface Transactions {
  accounts: Contas
}

export interface DashboardData {
  current_screen: Screen
  transactions_data?: Transactions
  plans_data?: Plano[]
}
