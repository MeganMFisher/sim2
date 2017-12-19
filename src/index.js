import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { unregister } from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import router from './routes/main';

ReactDOM.render(
  <BrowserRouter>
      { router }
  </BrowserRouter>,
   document.getElementById('root')
);

unregister();

