import initState from "./initState";
import * as actions from "./actionTypes";

function reducer(state = initState, action) {
    console.log(state)
    switch(action.type){
        case actions.START:
            return state;
        case actions.DISPLAY_ACCOUNTS_ACTION:
                return Object.assign({},state,{display:1});
        case actions.DISPLAY_ADD_ACCOUNT_ACTION:
                return Object.assign({},state,{display:2});
        case actions.ADD_NEW_ACCOUNTS_ACTION:
                return Object.assign({},state,{
                    accounts: [...state.accounts, action.payload.newAccount]
                })
        default:
            return state;
    }
}

export default reducer;