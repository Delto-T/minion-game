// Library
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Component
import App from './App';

//Redux
import { Provider } from 'react-redux'; // Permet de relier redux à react
import { configureStore } from '@reduxjs/toolkit'; 
import reducer from './store/minions';

const store = configureStore({reducer});

ReactDOM.render(
  <React.StrictMode>
    
    {/*Permet de diffuser le store via le Provider dans l'ensemble de App et de ses sous component*/}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
