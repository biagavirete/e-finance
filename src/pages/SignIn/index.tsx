import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as UserActions from '../../store/ducks/users/actions';
import Dashboard from '../Dashboard';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const SignIn = () => {
  const classes = useStyles();

  const [authorized, setAuthorized] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  const loginEmail = useRef<HTMLInputElement>(null)
  const loginPassword = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch();

  const submitSignUp = async () => {

    const request = {
      name: nameInput?.current?.value,
      email: emailInput?.current?.value,
      password: passwordInput?.current?.value
    }

    dispatch(UserActions.signUpRequest(request))
    console.log('data signup', request)
  }

  const submitLogin = async () => {

    const request = {
      email: loginEmail.current?.value,
      password: loginPassword.current?.value
    }

    try {
      dispatch(UserActions.loginRequest(request))
      setAuthorized(true);
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Box mb={3}>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Login
                  </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Faça o login para acessar seu Dashboard
                  </Typography>
          </Box>
          <TextField
            fullWidth
            label="E-mail"
            margin="normal"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Senha"
            margin="normal"
            type="password"
            variant="outlined"
          />

          <Box my={2}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={submitLogin}
            >
              Entrar
                  </Button>
          </Box>
          {authorized && <Redirect to="/Dashboard" />}
        </Container>
      </Box>
    </div>




    // <>
    //   <div>
    //     <div className="navbar">
    //       <Link to="/dashboard">Dashboard</Link>
    //       <Link to="/currency">Currency</Link>
    //       <Link to="/finances">Finances</Link>
    //     </div>
    //     <div className="sign-up">
    //       <strong>Cadastre-se</strong>
    //       <input type="text" placeholder="Nome" ref={nameInput} />
    //       <input type="text" placeholder="E-mail" ref={emailInput} />
    //       <input type="password" placeholder="Senha" ref={passwordInput} />
    //       <button type="button" onClick={submitSignUp}>Cadastrar</button>
    //     </div>

    //     <div className="login">
    //       <strong>Já tem cadastro? Faça seu login</strong>
    //       <input type="text" placeholder="E-mail" ref={loginEmail} />
    //       <input type="password" placeholder="Senha" ref={loginPassword} />
    //       <button type="button" onClick={submitLogin}>Entrar</button>
    //     </div>



    //   </div>
    // </>
  )
}

export default SignIn;