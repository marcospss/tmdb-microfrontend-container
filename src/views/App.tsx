import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '../ErrorBoundary';
import GlobalStyle from '~/application/styles/globalStyles';
import theme from '~/application/styles/theme';

import Routes from '~/application/router';

const queryClient = new QueryClient();

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
