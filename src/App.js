// Library
import React, { useEffect } from 'react';
import classes from './App.module.css';

// Components
import Header from './Components/Header/Header';
import Commander from './Components/Commander/Commander';

//Redux
import {connect} from 'react-redux';
import * as actionCreators from './store/actions/index';

function App(props) {


  //Variables
  let history;

  if(props.history && props.history != ''){
    history = props.history.map(result => (
      <div key={result.id} className={classes.result}>
        <span>
          <b>{ result.value }</b> infiltrés
        </span>

        Le {new Date(result.id).toLocaleString("fr-FR")}
      </div>
    ));
  }


  return (
    <div className={classes.App}>
      <Header />

      <div className="container">
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander />

        {props.history && props.history != '' ?
        <div className={classes.content}>
          <h2>Tableau des infiltrés</h2>
          {history}
        </div>
        : null
        }

      </div>
    </div>
  );
}


/* 
Abonnement au state

mapStateToProps est le nom par convention
Le but est de passer les informations contenus dans notre state directement
dans les props

mapStateToProps va etre envoyer dans connect qui va aller chercher les valeurs
recherchées par la fonction directement dans le state redux
*/
const mapStateToProps = state => {
  return {
    minions: state.minion.minions,
    history: state.save.history
  };
};

/* 
connect est un HOC, il doit englober le composant App.
Lorsque connect est appelé "connect()" il va renvoyer une fonction qui va 
récuperer comme argument App d'ou la notation un peu particulière
connect(mapStateToProps)(App)

1- connect envoie la méthode mapStateToProps vers redux
2- mapStateToProps va récupére les valeurs recherchées dans le state de redux
3- react-redux renvoie une fonction qui prend App en argument et qui donner
le return de mapStateToProps  comme Props du component App

A la fin props = {minions: 0}
*/


export default connect(mapStateToProps)(App);