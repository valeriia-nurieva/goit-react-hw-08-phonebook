import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
