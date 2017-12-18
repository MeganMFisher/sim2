import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { unregister } from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";
import router from './routes/main';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      { router }
    </Provider>
  </BrowserRouter>,
   document.getElementById('root')
);

unregister();
// registerServiceWorker();
