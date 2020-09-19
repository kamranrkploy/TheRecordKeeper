import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';
import Login from './components/Login'
import {BrowserRouter , Link , Switch , Route} from 'react-router-dom';
//creating store
const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));

const Header = () => (
  <nav className="">
          <div className="">
                   <div className="">
                       <button type="button" className="" data-toggle="collapse" data-target="#MyNavBar">
                           <span className=""/>                             
                           <span className=""/>                             
                           <span className=""/>                             
                       </button>
                       
                   </div>
          </div>
  </nav>
)


//providing store to react using Provider



ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
           <Route path="/" component={App} exact={true} />
           <Route path="/Login" component={Login} exact={true} />
        </Switch>
      </div>
   </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
 