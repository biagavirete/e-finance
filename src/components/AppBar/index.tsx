import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link as RouterLink, } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const useStyles = makeStyles((theme: any) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      paddingLeft: 10
    },
  }),
);

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <img src={Logo} alt="logo" width={40} height={40} />
          <Typography variant="h4" className={classes.title}>
            e-Finances
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/login"
          >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}