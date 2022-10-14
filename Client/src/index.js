import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducer from './_reducers/index';
import {BrowserRouter } from "react-router-dom";

const store = createStore(reducer, compose(applyMiddleware(Thunk)))
ReactDOM.render(
 
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  ,
  document.getElementById('root')
);

