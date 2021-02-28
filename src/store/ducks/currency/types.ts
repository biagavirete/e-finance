export enum CurrencyTypes {
  GET_CURRENCY_REQUEST = '@currency/GET_CURRENCY_REQUEST',
  GET_CURRENCY_SUCCESS = '@currency/GET_CURRENCY_SUCCESS',
  GET_CURRENCY_FAILURE = '@currency/GET_CURRENCY_FAILURE',

  GET_CURRENCIESLIST_REQUEST = '@currency/GET_CURRENCIESLIST_REQUEST',
  GET_CURRENCIESLIST_SUCCESS = '@currency/GET_CURRENCIESLIST_SUCCESS',
  GET_CURRENCIESLIST_FAILURE = '@currency/GET_CURRENCIESLIST_FAILURE',
}

export interface CurrencyState {
  readonly data: object;
  readonly loadingCurrency: boolean;
  readonly currenciesList: object;
}
