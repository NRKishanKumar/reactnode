require("@babel/register")
require("regenerator-runtime/runtime");

/* eslint-disable import/first */
import React from 'react';
/* eslint-disable import/first */
import ReactDOM, {hydrate} from 'react-dom';
/* eslint-disable import/first */
import './index.css';
/* eslint-disable import/first */
import App from './App';
/* eslint-disable import/first */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
