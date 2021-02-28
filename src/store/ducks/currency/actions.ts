import { action } from "typesafe-actions";
import { CurrencyTypes } from './types';

export const loadCurrencyRequest = (currency: any) => action(CurrencyTypes.GET_CURRENCY_REQUEST, currency);
export const loadCurrencySuccess = (data: any) => action(CurrencyTypes.GET_CURRENCY_SUCCESS, data);
export const loadCurrencyFailure = () => action(CurrencyTypes.GET_CURRENCY_FAILURE);

export const loadCurrenciesListRequest = () => action(CurrencyTypes.GET_CURRENCIESLIST_REQUEST);
export const loadCurrenciesListSuccess = (data: any) => action(CurrencyTypes.GET_CURRENCIESLIST_SUCCESS, data);
export const loadCurrenciesListFailure = () => action(CurrencyTypes.GET_CURRENCIESLIST_FAILURE);
