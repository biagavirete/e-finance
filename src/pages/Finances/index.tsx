import React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, makeStyles } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import NavBar from '../../components/NavBar';

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(12)
  }
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
              >
                <CardHeader
                  title="Finanças"
                />
                <Divider />
                <CardContent>
                  <Box
                    height={400}
                    position="relative"
                  >
                    <p>Texto</p>
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