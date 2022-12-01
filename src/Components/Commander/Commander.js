// Library
import React from 'react';
import styles from './Commander.module.css';

//Redux
import {connect} from 'react-redux';

function Commander(props) {
    return (
        <div className={styles.Commander}>
            <button onClick={props.createMinion}>Créer un minion</button>
            <button onClick={props.destroyMinion}>Détruire un minion</button>
            <button onClick={props.createTeam}>Créer une équipe de 5 minions</button>
            <button onClick={props.destroyTeam}>Détruire une équipe de 5 minions</button>
        </div>
    );
}

// Récuperer les actions (le nom doit être le même)

const mapDispatchToProps = dispatch => {
    return {
        createMinion: () => dispatch({type: 'CREATE_MINION'}),
        destroyMinion: () => dispatch({type: 'DESTROY_MINION'}),
        createTeam: () => dispatch({type: 'CREATE_TEAM'}),
        destroyTeam: () => dispatch({type: 'DESTROY_TEAM'})
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