import React from 'react';
import { Link as RouterLink, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, CardHeader, Divider, makeStyles, Typography } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';

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

function CurrencyDetails() {
  const classes = useStyles();

  const {
    currency_code,
    name,
    country_name,
    symbol,
    country_code,
    central_bank } = useSelector((state: any) => state.currency.data)

  return (
    <>
      <Box mt={3}>
        <Card className={classes.card}>
          <CardHeader
            subheader="Informações sobre a moeda selecionada"
            title="DETALHES"
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
              Banco central - <a href={central_bank} >{central_bank}</a>
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
    </>
  )
}

export default CurrencyDetails