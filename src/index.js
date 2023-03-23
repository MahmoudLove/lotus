import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Providerpro } from './context/productsContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationProvider } from './context/navigationContext';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NavigationProvider>
      <Providerpro>
        <App />
      </Providerpro>
    </NavigationProvider>
  </Provider>
);
