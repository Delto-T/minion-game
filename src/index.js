// Library
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component
import App from './App';

//Redux
import { Provider } from 'react-redux'; // Permet de relier redux à react
import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit'; 
import minionsReducer from './store/reducers/minions';
import saveReducer from './store/reducers/save';
import thunk from 'redux-thunk';

//combiner les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer
});

// Création du Middleware
const middleware = store => {
  return next => {
    return action => {
      console.log(store.getState().minion.minions);
      console.log(action.type);

      return next(action);
      // retour l'action à Next. Il est préférable de toujours retour
      // action car sinon on va retourner tour le temps l'action que
      // l'on aura coder en dur.
      // Attention si action ne retourne rien l'action sera bien envoyé mais 
      // le state ne sera pas modifié
    };
  };
};



const store = configureStore({
  reducer: reducer,
  middleware: new MiddlewareArray().concat([middleware, thunk]),
  devTools: process.env.NODE_ENV !== 'production'
  });

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


