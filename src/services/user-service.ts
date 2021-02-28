import axios from "axios";

const userApi = axios.create({
  baseURL: 'http://localhost:4000'
})

const UserService = {
  postSignUp: (signUpData: any) => userApi.post('/register', signUpData),
  postLogin: (loginData: any) => userApi.post('/login', loginData)
}

export default UserService;
