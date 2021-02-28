import { put, call } from 'redux-saga/effects';

import { loadCurrencySuccess, loadCurrencyFailure, loadCurrenciesListSuccess, loadCurrenciesListFailure } from "./actions"

import CurrencyService from "../../../services/currency-service";
import { AxiosResponse } from 'axios';

export function* getCurrency(action: any) {
  try {
    const response: AxiosResponse = yield call(CurrencyService.getCurrency, action.payload);
    const details = Object.values(response.data);
    yield put(loadCurrencySuccess(details[0]))
    console.log('saga getcurrency', details[0])
    console.log('details', details)
  } catch (err) {
    console.log(err)
    yield put(loadCurrencyFailure())
  }
}

export function* listCurrencies() {
  try {
    const response: object = yield call(CurrencyService.listCurrencies);
    yield put(loadCurrenciesListSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(loadCurrenciesListFailure())
  }
}
