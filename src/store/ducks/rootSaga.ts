import { takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';

import { CurrencyTypes } from './currency/types';
import { getCurrency, listCurrencies } from './currency/sagas';

import { UserTypes } from './users/types';
import { postSignUp, postLogin } from './users/sagas';

import { FinanceTypes } from './finances/types';
import { getTransactions, postTransaction, deleteTransaction } from './finances/sagas';

export default function* rootSaga(): any {
  return yield* all([
    takeLatest(CurrencyTypes.GET_CURRENCY_REQUEST, getCurrency),
    takeLatest(CurrencyTypes.GET_CURRENCIESLIST_REQUEST, listCurrencies),

    takeLatest(UserTypes.POST_SIGNUP_REQUEST, postSignUp),
    takeLatest(UserTypes.POST_LOGIN_REQUEST, postLogin),

    takeLatest(FinanceTypes.GET_TRANSACTION_REQUEST, getTransactions),
    takeLatest(FinanceTypes.POST_TRANSACTION_REQUEST, postTransaction),
    takeLatest(FinanceTypes.DELETE_TRANSACTION_REQUEST, deleteTransaction)
  ])
}
