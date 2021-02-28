import { Reducer } from "redux";
import { UserTypes, UserState } from './types';

const INITIAL_STATE: UserState = {
  data: {
    accessToken: '',
  },
  loading: false,
  error: false,
  success: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.POST_SIGNUP_REQUEST:
      return { ...state, loading: true, error: false }
    case UserTypes.POST_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        data: action.payload.data
      }
    case UserTypes.POST_SIGNUP_FAILURE:
      return { ...state, loading: false, error: true }

    case UserTypes.POST_LOGIN_REQUEST:
      return { ...state, loading: true }
    case UserTypes.POST_LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload.data,
        loading: false,
      }
    case UserTypes.POST_LOGIN_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
