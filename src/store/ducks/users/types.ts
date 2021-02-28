export enum UserTypes {
  POST_SIGNUP_REQUEST = '@users/POST_SIGNUP_REQUEST',
  POST_SIGNUP_SUCCESS = '@users/POST_SIGNUP_SUCCESS',
  POST_SIGNUP_FAILURE = '@users/POST_SIGNUP_FAILURE',

  POST_LOGIN_REQUEST = '@users/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS = '@users/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE = '@users/POST_LOGIN_FAILURE',
}

export interface Users {
  email: string,
  password: string
}

export interface UserState {
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: boolean;
  data: {
    accessToken: string;
  }
}
