import React, { useRef, useState } from 'react';
import { dispatch } from 'react-hot-toast';
import { Link as RouterLink } from 'react-router-dom';
import * as FinanceActions from '../../store/ducks/finances/actions';

import NavBar from '../../components/NavBar';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, FormControlLabel, Grid, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  }
}));

function NewTransaction() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const amountInput = useRef<HTMLInputElement>(null);

  const handleRegister = () => {

    const request = {
      type: value,
      amount: amountInput?.current?.value
    }

    try {
      dispatch(FinanceActions.postTransactionsRequest(request))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
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
              >
                <CardHeader
                  title="Cadastro"
                  subheader="Cadastre uma nova transação"
                />
                <Divider />
                <CardContent>
                  <Box
                    height={350}
                    position="relative"
                  >
                    <Box
                      p={2}
                    >
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                      >
                        Selecione abaixo:
                </Typography>
                      <RadioGroup row aria-label="type" name="type" value={value} onChange={handleChange}>
                        <FormControlLabel value="recebimento" control={<Radio />} label="Recebimento" />
                        <FormControlLabel value="despesa" control={<Radio />} label="Despesa" />
                      </RadioGroup>
                    </Box>
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
                    <Box
                      display="flex"
                      justifyContent="center"
                      p={2}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleRegister}
                      >
                        Cadastrar transação
          </Button>
                    </Box>
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