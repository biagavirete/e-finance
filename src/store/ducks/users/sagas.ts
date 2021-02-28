import { AxiosResponse } from 'axios';
import { put, call } from 'redux-saga/effects';

import UserService from "../../../services/user-service";
import { loginFailure, loginSuccess, signUpFailure, signUpSuccess } from './actions';

export function* postSignUp(action: any) {
  try {
    const response: AxiosResponse = yield call(UserService.postSignUp, action.payload);
    yield put(signUpSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(signUpFailure())
  }
}

export function* postLogin(action: any) {
  try {
    const response: AxiosResponse = yield call(UserService.postLogin, action.payload);
    localStorage.setItem('token', response.data.accessToken);
    yield put(loginSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(loginFailure())
  }
}

