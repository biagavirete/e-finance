import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { Add, List } from '@material-ui/icons';
import NavBar from '../../components/NavBar';
import { Link as RouterLink, } from 'react-router-dom';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  },
  card: {
    width: 800
  },
}));

function Finances() {
  const classes = useStyles();

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
                      component={RouterLink}
                      to="/newtransaction"
                    >
                      Cadastrar
                  </Button>
                    <Button
                      color="primary"
                      startIcon={<List />}
                      size="large"
                      variant="text"
                      component={RouterLink}
                      to="/transactionslist"
                    >
                      Listar
                  </Button>
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

export default Finances;