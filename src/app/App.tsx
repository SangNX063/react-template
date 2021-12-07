import Header from '@components/Header';
import { MainRoute } from '@src/modules';
import { ThemedGlobalStyle, ThemeProvider } from '@src/theme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import withApp from './App.enhance';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <Router>
        <Header />
        <MainRoute />
      </Router>
    </ThemeProvider>
  );
};

export default withApp(React.memo(App));
