import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducer from './_reducers/index';
import {BrowserRouter } from "react-router-dom";

const store = createStore(reducer, compose(applyMiddleware(Thunk)))

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
 
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  
);

