import React from 'react';
import { Link as RouterLink, } from 'react-router-dom';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import NavBar from '../../components/NavBar';

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

function Dashboard() {
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
                  title="DASHBOARD"
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
                      variant="h2"
                    >
                      Bem-vindo!
                </Typography>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h5"
                    >
                      Aqui você poderá administrar suas finanças.
                </Typography>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h5"
                    >
                      Navegue pelo menu ao lado ou clique no botão abaixo para ver suas finanças.
                </Typography>
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
                    endIcon={<ArrowRightIcon />}
                    size="small"
                    variant="text"
                    component={RouterLink}
                    to="/finances"
                  >
                    Seguir para Finanças
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

export default Dashboard;