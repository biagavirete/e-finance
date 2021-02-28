import { put, call } from 'redux-saga/effects';

import {
  getTransactionsSuccess,
  getTransactionsFailure,
  postTransactionsSuccess,
  postTransactionsFailure,
  deleteTransactionsSuccess,
  deleteTransactionsFailure
} from "./actions"

import FinancesService from "../../../services/finances-service";
import { AxiosResponse } from 'axios';

export function* getTransactions() {
  try {
    const response: AxiosResponse = yield call(FinancesService.getTransactions);
    yield put(getTransactionsSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(getTransactionsFailure())
  }
}

export function* postTransaction(action: any) {
  try {
    const response: AxiosResponse = yield call(FinancesService.postTransaction, action.payload);
    yield put(postTransactionsSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(postTransactionsFailure())
  }
}

export function* deleteTransaction(action: any) {
  try {
    yield call(FinancesService.deleteTransactions, action.payload);
    yield put(deleteTransactionsSuccess())
  } catch (err) {
    console.log(err)
    yield put(deleteTransactionsFailure())
  }
}
