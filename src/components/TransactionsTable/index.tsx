import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as FinanceActions from '../../store/ducks/finances/actions';

import NavBar from '../NavBar';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Icon, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { ArrowLeft as ArrowLeftIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from '../../store/ducks/finances/types';

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
  icon: {
    cursor: 'pointer'
  }
}));

function TransactionsTable() {
  const classes = useStyles();

  const [selectedTransaction, setSelectedTransaction] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FinanceActions.getTransactionsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const transactions = useSelector((state: any) => state.finance.transactions)

  console.log('transactions', transactions)

  let transactionsArray: any[] | undefined = []
  Object.keys(transactions).forEach(function (item) {
    transactionsArray?.push(transactions[item]);
  })

  const deleteTransaction = (id: any) => {
    setSelectedTransaction(id);
    console.log('selected transaction', selectedTransaction)
    if (selectedTransaction !== '') {
      try {
        dispatch(FinanceActions.deleteTransactionsRequest(selectedTransaction))
      } catch (e) {
        console.log(e)
      }
    }
  }

  useEffect(() => {
    dispatch(FinanceActions.getTransactionsRequest());
  }, [dispatch])

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
                  title="LISTA DE TRANSAÇÕES"
                  subheader="Veja as transações cadastradas"
                />
                <Divider />
                <CardContent>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ID</TableCell>
                          <TableCell>Tipo</TableCell>
                          <TableCell>Valor</TableCell>
                          <TableCell>Excluir</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {transactionsArray.map((row: Transaction, key: any) => (
                          <TableRow key={key}>
                            <TableCell component="th" scope="row">
                              {row.id}
                            </TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell><Icon className={classes.icon} onClick={() => deleteTransaction(String(row.id))}><DeleteIcon /></Icon></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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