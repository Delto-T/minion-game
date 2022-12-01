//Library


// State initial
const initialState = {
    minions: 0,
    error: false
};


//Reducer
const reducer = (state= initialState, action) => {

    switch(action.type){
        case 'CREATE_MINION':
            return{
                minions: state.minions + 1
            }
        case 'DESTROY_MINION':
            return{
                minions: state.minions - 1
            }
        case'CREATE_TEAM':
            return{
                minions: state.minions + 5
            }
        case 'DESTROY_TEAM':
            return{
                minions: state.minions - 5
            }
        default:
            return state;
    }
};

export default reducer;