import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from 'components/App';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
