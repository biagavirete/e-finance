import { action } from "typesafe-actions";
import { FinanceTypes } from './types';

export const getTransactionsRequest = () => action(FinanceTypes.GET_TRANSACTION_REQUEST);
export const getTransactionsSuccess = (data: any) => action(FinanceTypes.GET_TRANSACTION_SUCCESS, data);
export const getTransactionsFailure = () => action(FinanceTypes.GET_TRANSACTION_FAILURE);

export const postTransactionsRequest = (newTransactionData: any) => action(FinanceTypes.POST_TRANSACTION_REQUEST, newTransactionData);
export const postTransactionsSuccess = (data: any) => action(FinanceTypes.POST_TRANSACTION_SUCCESS, data);
export const postTransactionsFailure = () => action(FinanceTypes.POST_TRANSACTION_FAILURE);

export const deleteTransactionsRequest = (id: any) => action(FinanceTypes.DELETE_TRANSACTION_REQUEST, id);
export const deleteTransactionsSuccess = () => action(FinanceTypes.DELETE_TRANSACTION_SUCCESS);
export const deleteTransactionsFailure = () => action(FinanceTypes.DELETE_TRANSACTION_FAILURE);
