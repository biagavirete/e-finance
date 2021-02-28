import { Reducer } from "redux";
import { CurrencyTypes, CurrencyState } from './types';

const INITIAL_STATE: CurrencyState = {
  data: {},
  currencyDetails: [],
  loadingCurrency: false,
  currenciesList: {},
}

const reducer: Reducer<CurrencyState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyTypes.GET_CURRENCY_REQUEST:
      return { ...state, loadingCurrency: true }
    case CurrencyTypes.GET_CURRENCY_SUCCESS:
      return {
        ...state,
        loadingCurrency: false,
        data: action.payload
      }
    case CurrencyTypes.GET_CURRENCY_FAILURE:
      return { ...state, loadingCurrency: false }

    case CurrencyTypes.GET_CURRENCIESLIST_REQUEST:
      return { ...state, loadingCurrency: true }
    case CurrencyTypes.GET_CURRENCIESLIST_SUCCESS:
      return {
        ...state,
        loadingCurrency: false,
        currenciesList: action.payload.data
      }
    case CurrencyTypes.GET_CURRENCIESLIST_FAILURE:
      return { ...state, loadingCurrency: true }
    default:
      return state
  }
}

export default reducer
