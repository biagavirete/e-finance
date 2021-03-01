import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as CurrencyActions from '../../store/ducks/currency/actions';
import NavBar from '../../components/NavBar';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Container,
  InputLabel,
  Select,
  FormControl,
  MenuItem
} from '@material-ui/core';
import { toast, Toaster } from 'react-hot-toast';
import CurrencyDetails from '../../components/CurrencyDetails';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(12),
    paddingTop: theme.spacing(12),
  },
  card: {
    width: 800
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Currency() {
  const classes = useStyles();

  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [showCurrencyDetails, setShowCurrencyDetails] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
    if (selectedCurrency !== '') {
      try {
        dispatch(CurrencyActions.loadCurrencyRequest(selectedCurrency));
        setShowCurrencyDetails(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      toast.error('Selecione uma moeda')
      return
    }
  }

  return (
    <>
      <Toaster />
      <NavBar />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Card className={classes.card}>
            <CardHeader
              subheader="Selecione a moeda de sua preferência"
              title="MOEDAS"
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

          {showCurrencyDetails ? <CurrencyDetails /> : null}
        </Container>

      </div>
    </>
  )
}

export default Currency;