import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as FinanceActions from '../../store/ducks/finances/actions';

import NavBar from '../NavBar';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  },
  table: {
    minWidth: 650,
  },
}));

function TransactionsTable() {
  const classes = useStyles();

  const [selectedTransaction, setSelectedTransaction] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FinanceActions.getTransactionsRequest());
  }, [])

  const transactions = useSelector((state: any) => state.finance.transactions)

  console.log('transactions', transactions)

  const teste = 2;

  let transactionsList: any[] = []

  Object.keys(transactions).forEach(function (key) {
    transactionsList.push(transactions[key]);
  })

  console.log('transactions list', transactionsList)
  console.log(selectedTransaction)

  const deleteTransaction = (id: any) => {
    setSelectedTransaction(id);
    console.log('selected transaction', selectedTransaction)
    try {
      dispatch(FinanceActions.deleteTransactionsRequest(selectedTransaction))
    } catch (e) {
      console.log(e)
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
                  title="Lista de transações"
                  subheader="Veja as transações cadastradas"
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
                        Transações
                </Typography>
                      <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                      >
                        Teste delete
                        <p onClick={() => deleteTransaction(teste)}><DeleteIcon /></p>

                      </Typography>
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

export default TransactionsTable;