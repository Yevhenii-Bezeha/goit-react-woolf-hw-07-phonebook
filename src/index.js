import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { App } from 'components/App';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-woolf-hw-07-phonebook">
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={2500} />
    </Provider>
  </BrowserRouter>
);
