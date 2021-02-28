import { Reducer } from "redux";
import { FinanceTypes, FinanceState } from './types';

const INITIAL_STATE: any = {
  transactions: [],
  loading: false,
  error: false,
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FinanceTypes.GET_TRANSACTION_REQUEST:
      return { ...state, loading: true }
    case FinanceTypes.GET_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      }
    case FinanceTypes.GET_TRANSACTION_FAILURE:
      return { ...state, loading: false }

    case FinanceTypes.POST_TRANSACTION_REQUEST:
      return { ...state, loading: true }
    case FinanceTypes.POST_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FinanceTypes.POST_TRANSACTION_FAILURE:
      return { ...state, loading: false, error: true }

    case FinanceTypes.DELETE_TRANSACTION_REQUEST:
      return { ...state, loading: true }
    case FinanceTypes.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case FinanceTypes.DELETE_TRANSACTION_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
