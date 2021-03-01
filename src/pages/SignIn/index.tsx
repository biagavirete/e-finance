import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as UserActions from '../../store/ducks/users/actions';
import { toast, Toaster } from 'react-hot-toast';

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

  const loginEmail = useRef<HTMLInputElement>(null)
  const loginPassword = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch();

  const submitLogin = async () => {

    const request = {
      email: loginEmail.current?.value,
      password: loginPassword.current?.value
    }

    if (request.email !== '' || request.password !== '') {
      try {
        dispatch(UserActions.loginRequest(request))
        setAuthorized(true)
      } catch (e) {
        console.log(e)
      }
    } else {
      toast.error('Preencha todos os campos!')
    }
  }

  return (
    <div className={classes.root}>
      <Toaster />
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
            inputRef={loginEmail}
          />
          <TextField
            fullWidth
            label="Senha"
            margin="normal"
            type="password"
            variant="outlined"
            inputRef={loginPassword}
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
          {authorized && <Redirect to="/dashboard" />}
        </Container>
      </Box>
    </div>
  )
}

export default SignIn;