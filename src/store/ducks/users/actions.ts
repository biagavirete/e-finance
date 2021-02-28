import { action } from "typesafe-actions";
import { UserTypes } from './types';

export const signUpRequest = (signUpData: any) => action(UserTypes.POST_SIGNUP_REQUEST, signUpData);
export const signUpSuccess = (data: any) => action(UserTypes.POST_SIGNUP_SUCCESS, data);
export const signUpFailure = () => action(UserTypes.POST_SIGNUP_FAILURE);

export const loginRequest = (loginData: any) => action(UserTypes.POST_LOGIN_REQUEST, loginData);
export const loginSuccess = (data: any) => action(UserTypes.POST_LOGIN_SUCCESS, data);
export const loginFailure = () => action(UserTypes.POST_LOGIN_FAILURE);