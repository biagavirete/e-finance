import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CurrencyActions from '../../store/ducks/currency/actions';
import NavBar from '../../components/NavBar';
import { Link as RouterLink, } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Divider, FormControlLabel, Grid, Typography, makeStyles, Container, Radio, RadioGroup } from '@material-ui/core';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(12),
    paddingTop: theme.spacing(12)
  },
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

function Currency() {
  const classes = useStyles();

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCurrency((event.target as HTMLInputElement).value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CurrencyActions.loadCurrenciesListRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const responseCurrency = useSelector((state: any) => state.currency.currenciesList);
  const currencyArray = Object.values(responseCurrency);

  const getSelectedCurrencyData = (param: any) => {
    setSelectedCurrency(param);
    console.log('selected currency', selectedCurrency)
    if (selectedCurrency !== '') {
      try {
        dispatch(CurrencyActions.loadCurrencyRequest(selectedCurrency))
      } catch (e) {
        console.log(e)
      }
    }
  }

  const currencyData = useSelector((state: any) => state.currency.data)
  console.log('currency data', currencyData)
  const currencyDataArray: any = Object.values(currencyData)
  console.log('currencyDataArray', currencyDataArray)

  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Card>
            <CardHeader
              subheader="Selecione a moeda de sua preferência"
              title="Moedas"
            />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={6}
                wrap="wrap"
              >
                <Grid
                  className={classes.item}
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  {currencyArray !== undefined && currencyArray.map((currency: any) => (
                    <RadioGroup aria-label="currency" name="gender1" value={selectedCurrency} onChange={handleChange}>
                      <FormControlLabel value={currency.currency_code} control={<Radio />} label={currency.name} />
                    </RadioGroup>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={getSelectedCurrencyData}
              >
                Selecionar
          </Button>
            </Box>
          </Card>
          <Box mt={3}>
            <Card>
              <CardHeader
                subheader="Informações sobre a moeda selecionada"
                title="Detalhes"
              />
              <Divider />
              <CardContent>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h4"
                >
                  Moeda: {currencyDataArray[0].currency_code}
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  {currencyDataArray[0].name} - {currencyDataArray[0].country_code}
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  Símbolo - {currencyDataArray[0].symbol}
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  Banco central - <a href={currencyDataArray[0].central_bank} >Clique aqui para visitar o site</a>
                </Typography>
              </CardContent>
              <Divider />
              <Box
                display="flex"
                justifyContent="flex-end"
                p={2}
              >
                <Button
                  color="primary"
                  variant="contained"
                  component={RouterLink}
                  to="/dashboard"
                >
                  Voltar para o dashboard
          </Button>
              </Box>
            </Card>
          </Box>
        </Container>

      </div>
    </>
  )
}

export default Currency;