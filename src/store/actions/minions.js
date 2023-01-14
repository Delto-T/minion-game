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
