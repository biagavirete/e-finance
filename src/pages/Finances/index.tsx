import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Add, List } from '@material-ui/icons';
import NavBar from '../../components/NavBar';
import { Link as RouterLink, } from 'react-router-dom';
import NewTransaction from '../../components/NewTransaction';
import TransactionsTable from '../../components/TransactionsTable';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  },
  card: {
    width: 1000
  },
}));

function Finances() {
  const classes = useStyles();

  const [openNewTransaction, setOpenNewTransaction] = useState(false);
  const [openTransactionsTable, setOpenTransactionsTable] = useState(false);


  const toggleNewTransaction = () => {
    if (openTransactionsTable) {
      setOpenTransactionsTable(false);
      setOpenNewTransaction(true);
    } else {
      setOpenNewTransaction(!openNewTransaction);
    }
  }

  const toggleTransactionsTable = () => {
    if (openNewTransaction) {
      setOpenNewTransaction(false);
      setOpenTransactionsTable(true);
    } else {
      setOpenTransactionsTable(!openTransactionsTable);
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
                className={classes.card}
              >
                <CardHeader
                  title="FINANÇAS"
                  subheader="Administre suas finanças"
                />
                <Divider />
                <CardContent>
                  <Box
                    height={100}
                    position="relative"
                  >
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h5"
                    >
                      Selecione abaixo:
                </Typography>
                    <Button
                      color="primary"
                      startIcon={<Add />}
                      size="large"
                      variant="text"
                      onClick={toggleNewTransaction}
                    // component={RouterLink}
                    // to="/newtransaction"
                    >
                      Cadastrar
                  </Button>
                    <Button
                      color="primary"
                      startIcon={<List />}
                      size="large"
                      variant="text"
                      onClick={toggleTransactionsTable}
                    >
                      Listar
                  </Button>
                  </Box>
                  {openNewTransaction ? <NewTransaction /> : null}
                  {openTransactionsTable ? <TransactionsTable /> : null}
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

export default Finances;