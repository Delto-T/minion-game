import React from 'react';
import classes from './Commander.module.css';

function Commander(props) {
    return (
        <div class={classes.Commander}>
            <button onClick={props.createMinion}>Créer un minion</button>
            <button onClick={props.destroyMinion}>Détruire un minion</button>
            <button onClick={props.createTeam}>Créer une équipe de 5 minions</button>
            <button onClick={props.destroyTeam}>Détruire une équipe de 5 minions</button>
        </div>
    );
}

export default Commander;