// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
  serviceWorker.register();
}
