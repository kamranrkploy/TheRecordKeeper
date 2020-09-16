import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';
//creating store
const store = createStore(rootReducer , composeWithDevTools());

//providing store to react using Provider



ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
 