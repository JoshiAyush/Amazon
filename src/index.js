/**
 * @file src/index.js renders our Web App, we also use StateProvider here to
 * access data like products in the basket, logged in user, etc 
 */

import React from 'react';                              // importing react
import ReactDOM from 'react-dom';                       // importing react-dom                               

import "normalize.css";

import App from './App';                                // importing App.js
import { GlobalStyles } from "./global-styles.js";
import { StateProvider } from './StateProvider';        // importing StateProvider
import reducer, { initialState } from './reducer'       // importing reducer


ReactDOM.render(
  <React.StrictMode>

    <GlobalStyles />

    <StateProvider initialState={initialState} reducer={reducer}>

      <App />

    </StateProvider>

  </React.StrictMode>,

  document.getElementById('root')
);
