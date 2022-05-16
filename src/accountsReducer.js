import{ accountsState } from "./initState";
import * as actions from "./actionTypes";

function accountsReducer(state = accountsState, action) {

    switch (action.type) {
        case actions.START:
            return state;

        case actions.FETCH_USERS_REQUEST:
                return {...state, loading:true};

        case actions.FETCH_USERS_SUCCESS:
                    return {
                        loading:false,
                        accounts: action.payload.accounts,
                        error: ''
                    };

         case actions.FETCH_USERS_ERROR:
                        return {
                            loading: false,
                            accounts:[],
                            error: action.payload.err
                        };

        case actions.ADD_NEW_ACCOUNTS_ACTION:
            return {...state, 
            accounts: [...state.accounts, action.payload.newAccount]};

        case actions.DELETE_ACCOUNT_ACTION:
            let filteredAccounts = state.accounts.filter(account => {
                //console.log(typeof(action.payload.id))
                //console.log(typeof(account.id))
                return account.id.toString() !== action.payload.id;
            })

            console.log(filteredAccounts)
            return {...state,accounts: filteredAccounts}
            
        default:
            return state;
    }
}

export default accountsReducer;