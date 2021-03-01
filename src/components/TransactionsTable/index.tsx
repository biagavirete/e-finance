import React, { useEffect, useState } from 'react';
import * as FinanceActions from '../../store/ducks/finances/actions';
import { Icon, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from '../../store/ducks/finances/types';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme: any) => ({
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

  const { error, success } = useSelector((state: any) => state.finance)

  let transactionsArray: any[] | undefined = []
  Object.keys(transactions).forEach(function (item) {
    transactionsArray?.push(transactions[item]);
  })

  const deleteTransaction = (id: any) => {
    setSelectedTransaction(id);
    if (selectedTransaction !== '') {
      try {
        dispatch(FinanceActions.deleteTransactionsRequest(selectedTransaction))
        if (error) {
          toast.error('Não foi possível excluir o item')
        }
        if (success) {
          dispatch(FinanceActions.getTransactionsRequest());
        }
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
                <TableCell>
                  <Icon className={classes.icon} onClick={() => deleteTransaction(String(row.id))}><DeleteIcon /></Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default TransactionsTable;