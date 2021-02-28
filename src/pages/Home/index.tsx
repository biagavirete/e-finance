import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as UserActions from '../../store/ducks/users/actions';
import { Box, Button, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import { toast, Toaster } from 'react-hot-toast';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Home = () => {
  const classes = useStyles();

  const [defaultValue, setDefaultValue] = useState('');

  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch();

  const submitSignUp = async () => {

    const request = {
      name: nameInput?.current?.value,
      email: emailInput?.current?.value,
      password: passwordInput?.current?.value
    }

    try {
      dispatch(UserActions.signUpRequest(request))
      console.log('o que vai no signup', request)
      setDefaultValue('');
    } catch (e) {
      console.log(e);
    }
  }

  const { error, success } = useSelector((state: any) => state.users)

  if (error) {
    toast.error('Ocorreu um erro, tente novamente')
  }

  if (success) {
    toast.success('Cadastro realizado. Faça o login para continuar')
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
              Criar uma conta
                  </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Use o e-mail para criar sua conta
                  </Typography>
          </Box>
          <TextField
            fullWidth
            label="Nome"
            margin="normal"
            variant="outlined"
            required
            defaultValue={defaultValue}
            inputRef={nameInput}
          />
          <TextField
            fullWidth
            label="E-mail"
            margin="normal"
            type="email"
            variant="outlined"
            required
            defaultValue={defaultValue}
            inputRef={emailInput}

          />
          <TextField
            fullWidth
            label="Senha"
            margin="normal"
            type="password"
            variant="outlined"
            required
            helperText="No mínimo 6 dígitos"
            defaultValue={defaultValue}
            inputRef={passwordInput}
          />

          <Box my={2}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={submitSignUp}
            >
              Cadastrar
                  </Button>
          </Box>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            Já tem uma conta?
                  {' '}
            <Link
              to="/login"
            >
              Faça o login
                  </Link>
          </Typography>
        </Container>
      </Box>
    </div>
  )
}

export default Home;