// Library
import React from 'react';
import styles from './Commander.module.css';

//Redux
import {connect} from 'react-redux';
import actionTypes from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/index';

function Commander(props) {

    return (
        <div className={styles.Commander}>
            <button onClick={props.createMinion}>Créer un minion</button>
            <button onClick={props.destroyMinion}>Détruire un minion</button>
            <button onClick={() => props.createTeam(5)}>Créer une équipe de 5 minions</button>
            <button onClick={() => props.destroyTeam(5)}>Détruire une équipe de 5 minions</button>
            <button onClick={() => props.save(props.minions)}>Stocker le nombre d'infiltrés</button>        
        </div>
    );
}

//Abonnement au store
const mapStateToProps = state => {
    return {
      minions: state.minion.minions
    };
  };

// Récuperer les actions
const mapDispatchToProps = dispatch => {
    return {
        createMinion: () => dispatch(actionCreators.createMinion()),
        destroyMinion: () => dispatch(actionCreators.destroyMinion()),
        createTeam: (nombre) => dispatch(actionCreators.createTeam(nombre)),
        destroyTeam: (nombre) => dispatch(actionCreators.destroyTeam(nombre)),
        save: (nombreDeMinions) => dispatch(actionCreators.save(nombreDeMinions))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Commander);
