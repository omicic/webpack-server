import { displayState } from "./initState";
import * as actions from "./actionTypes";

function displayReducer(state = displayState, action) {
    //console.log(state)
    switch (action.type) {
    
        case actions.DISPLAY_ACCOUNTS_ACTION:
            return {...state, display: 1};

        case actions.DISPLAY_ADD_ACCOUNT_ACTION:
            return {...state, display: 2};

        default:
            return state;
    }
}

export default displayReducer;