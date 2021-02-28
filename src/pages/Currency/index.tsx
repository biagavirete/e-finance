import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CurrencyActions from '../../store/ducks/currency/actions';
import NavBar from '../../components/NavBar';
import { Link as RouterLink, } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, Typography, makeStyles, Container, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Currency() {
  const classes = useStyles();

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedCurrency((event.target as HTMLInputElement).value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CurrencyActions.loadCurrenciesListRequest())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const responseCurrency = useSelector((state: any) => state.currency.currenciesList);
  const { currency_code, name, country_name, symbol, country_code, central_bank } = useSelector((state: any) => state.currency.data)
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
                  <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Moedas</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={selectedCurrency}
                      onChange={handleChange}
                      label="Moedas"
                    >
                      {currencyArray !== undefined && currencyArray.map((currency: any) => (
                        <MenuItem value={currency.currency_code}>{currency.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
                  Moeda: {name} - {currency_code}
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  País: {country_name} ({country_code})
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  Símbolo: {symbol}
                </Typography>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h5"
                >
                  Banco central - <a href={central_bank} >Clique aqui para visitar o site</a>
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
                  startIcon={<ArrowLeft />}
                  size="small"
                  variant="text"
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