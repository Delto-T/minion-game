// Library
import React from 'react';
import styles from './Commander.module.css';

//Redux
import {connect} from 'react-redux';
import actionTypes from '../../store/actions';

function Commander(props) {
    return (
        <div className={styles.Commander}>
            <button onClick={props.createMinion}>Créer un minion</button>
            <button onClick={props.destroyMinion}>Détruire un minion</button>
            <button onClick={() => props.createTeam(5)}>Créer une équipe de 5 minions</button>
            <button onClick={() => props.destroyTeam(5)}>Détruire une équipe de 5 minions</button>
        </div>
    );
}

// Récuperer les actions (le nom doit être le même)

const mapDispatchToProps = dispatch => {
    return {
        createMinion: () => dispatch({type: actionTypes.CREATE_MINION}),
        destroyMinion: () => dispatch({type: actionTypes.DESTROY_MINION}),
        createTeam: (nombre) => dispatch({type: actionTypes.CREATE_TEAM, value: nombre}),
        destroyTeam: (nombre) => dispatch({type: actionTypes.DESTROY_TEAM, value: nombre})
    };
};

export default connect(null, mapDispatchToProps)(Commander);

/*
Attention lorsque l'on utilise connect() pout récupérer des actions sans
connecter directement le state il faudra passer null en premier argument
car conenct() attend comme premier argument la méthode mapStateToProps

Le fonctionnemen de la méthode connect reste le même mais au lieu de transformer
le state dans les props du component la on va diffuser les actions de 
mapDispatchToprops dans les props pour qu'elle devient des props et qu'on 
puisse les appelers dans le componant.

Ici l'action createMinion appele une fonction anonyme qui utilise la méthode
dispatch() qui prends comme argument une action. Cette action va trigger 
le store et déclacher l'action associé sur le state.
*/