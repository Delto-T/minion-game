//Library
import actionTypes from './actionTypes';

export const createMinion = () => {
    return {
        type: actionTypes.CREATE_MINION
    };
};

export const destroyMinion = () => {
    return {
        type: actionTypes.DESTROY_MINION
    };
};

export const createTeam= nombre => {
    return {
        type: actionTypes.CREATE_TEAM,
        value: nombre
    };
};

export const destroyTeam = nombre => {
    return {
        type: actionTypes.DESTROY_TEAM,
        value: nombre
    };
};

const autoEnrollAsync = minions =>{
    return {
        type: actionTypes.AUTO_ENROLL,
        value: minions + 1
    };
};

export const autoEnroll = minions => {
    return dispatch => {
        setInterval(() => {
            dispatch(autoEnrollAsync(minions))
        }, 4000)
    }
};
/*
Thunk est un middleware
Dans la constante autoEnroll on va retourner dispatch qui va permettre a
redux Thunk de reconnaitre qu'il devra interragir avec cette fonction.

Thunk va reconnaitre sa méthode setInterval qui prends comme argument
une fonction annonyme qui renvoie un objet avec comme propriété la méthode 
dispatch et le temps de l'intervalle. Ici 4000ms = 4s.

Dans la fonction dispatch on donne comme argument une fonction qui est
une action.
*/