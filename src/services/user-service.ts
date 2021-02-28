import api from './api';

const UserService = {
  postSignUp: (signUpData: any) => api.post('/register', signUpData),
  postLogin: (loginData: any) => api.post('/login', loginData)
}

export default UserService;
