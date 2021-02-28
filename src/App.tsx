import React from 'react';
import { Provider } from 'react-redux';
import NavigationBar from './components/AppBar';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import { store } from './store';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <NavigationBar />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
