//Library
import actionTypes from "../actions/actionTypes";

// State initial
const initialState = {
    minions: 0
};


//Reducer
const reducer = (state= initialState, action) => {

    switch(action.type){
        case actionTypes.CREATE_MINION:
            return{
                minions: state.minions + 1
            }
        case actionTypes.DESTROY_MINION:
            return{
                minions: state.minions - 1
            }
        case actionTypes.CREATE_TEAM:
            return{
                minions: state.minions + action.value
            }
        case actionTypes.DESTROY_TEAM:
            return{
                minions: state.minions - action.value
            }
        default:
            return state;
    }
};

export default reducer;