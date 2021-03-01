import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as FinanceActions from '../../store/ducks/finances/actions';

import NavBar from '../../components/NavBar';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, FormControl, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

import { toast, Toaster } from 'react-hot-toast';


const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  },
  card: {
    width: 400
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

function NewTransaction() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const { error, success } = useSelector((state: any) => state.finance)

  const amountInput = useRef<HTMLInputElement>(null);

  const handleRegister = () => {

    const request = {
      type: value,
      amount: amountInput?.current?.value
    }

    try {
      dispatch(FinanceActions.postTransactionsRequest(request))
      if (error) {
        toast.error('Erro ao cadastrar transação')
      }

      if (success) {
        toast.success('Cadastro realizado com sucesso')
      }
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <>
      <Toaster />
      <NavBar />
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Card
                className={classes.card}
              >
                <CardHeader
                  title="CADASTRO"
                  subheader="Cadastre uma nova transação"
                />
                <Divider />
                <CardContent className={classes.cardContent}>
                  <Box
                    height={300}
                    position="relative"
                  >

                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h5"
                    >
                      Selecione abaixo:
                </Typography>
                    <FormControl>
                      <RadioGroup row aria-label="type" name="type" value={value} onChange={handleChange}>
                        <FormControlLabel value="recebimento" control={<Radio />} label="Recebimento" />
                        <FormControlLabel value="despesa" control={<Radio />} label="Despesa" />
                      </RadioGroup>

                      <Box
                        p={2}
                      >
                        <Typography
                          color="textPrimary"
                          gutterBottom
                          variant="h5"
                        >
                          Digite o valor:
                </Typography>
                        <TextField
                          id="outlined-helperText"
                          label="Valor"
                          helperText="Incluir R$ antes do valor"
                          variant="outlined"
                          inputRef={amountInput}
                        />
                      </Box>

                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleRegister}
                      >
                        Cadastrar transação
          </Button>
                    </FormControl>
                  </Box>
                </CardContent>
                <Divider />
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  p={2}
                >
                  <Button
                    color="primary"
                    startIcon={<ArrowLeftIcon />}
                    size="small"
                    variant="text"
                    component={RouterLink}
                    to="/dashboard"
                  >
                    Voltar para o dashboard
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default NewTransaction;