import  *  as actionTypes from "./actionTypes"

export const START = () =>{
    return{
        type: actionTypes.START
    }
}

export const DISPLAY_ACCOUNTS_ACTION = () =>{
    return{
        type: actionTypes.DISPLAY_ACCOUNTS_ACTION
    }
}   

export const DISPLAY_ADD_ACCOUNT_ACTION = () =>{
        return{
            type: actionTypes.DISPLAY_ADD_ACCOUNT_ACTION
        }
}

 export const ADD_NEW_ACCOUNTS_ACTION = (newAccount) =>{
    return{
        type: actionTypes.ADD_NEW_ACCOUNTS_ACTION,
        payload:{
            newAccount: newAccount
        }
    }
}