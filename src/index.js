import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

//creating store
const store = createStore(composeWithDevTools());

//providing store to react using Provider



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 