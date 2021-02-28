export enum FinanceTypes {
  GET_TRANSACTION_REQUEST = '@finance/GET_TRANSACTION_REQUEST',
  GET_TRANSACTION_SUCCESS = '@finance/GET_TRANSACTION_SUCCESS',
  GET_TRANSACTION_FAILURE = '@finance/GET_TRANSACTION_FAILURE',

  POST_TRANSACTION_REQUEST = '@finance/POST_TRANSACTION_REQUEST',
  POST_TRANSACTION_SUCCESS = '@finance/POST_TRANSACTION_SUCCESS',
  POST_TRANSACTION_FAILURE = '@finance/POST_TRANSACTION_FAILURE',

  DELETE_TRANSACTION_REQUEST = '@finance/DELETE_TRANSACTION_REQUEST',
  DELETE_TRANSACTION_SUCCESS = '@finance/DELETE_TRANSACTION_SUCCESS',
  DELETE_TRANSACTION_FAILURE = '@finance/DELETE_TRANSACTION_FAILURE',
}

export interface Transaction {
  type: string;
  amount: string;
}

export interface FinanceState {
  readonly transactions: Transaction[],
  readonly loading: boolean;
  readonly error: boolean;
}
