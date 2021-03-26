import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import {store} from './reducers'
import {Provider} from 'react-redux'

import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'


const history = createBrowserHistory()
ReactDOM.render((
  <Router history={history}>
    <Provider store={store}>
    <App/>
    </Provider>
  </Router>
), document.getElementById('root')
);