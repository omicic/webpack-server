import * as actionTypes from "./actionTypes"

export const START = () => {
    return {
        type: actionTypes.START
    }
}

export const FETCH_ACCOUNTS = () => {
    return function (dispatch) { //reudx thunk
        dispatch(FETCH_USERS_REQUEST());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)//ok
                dispatch(FETCH_USERS_SUCCESS(data))
            })
            .catch(err => {
                dispatch(FETCH_USERS_ERROR(err))
            })
    }
}

export const FETCH_USERS_REQUEST = () => {
    return {
        type: actionTypes.FETCH_USERS_REQUEST,
    }
}

export const FETCH_USERS_SUCCESS = (accounts) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: {
            accounts: accounts
        }
    }
}

export const FETCH_USERS_ERROR = (err) => {
    return {
        type: actionTypes.FETCH_USERS_ERROR,
        payload: {
            err: err
        }
    }
}


export const DISPLAY_ACCOUNTS_ACTION = () => {
    return {
        type: actionTypes.DISPLAY_ACCOUNTS_ACTION
    }
}

export const DISPLAY_ADD_ACCOUNT_ACTION = () => {
    return {
        type: actionTypes.DISPLAY_ADD_ACCOUNT_ACTION
    }
}

export const ADD_NEW_ACCOUNTS_ACTION = (newAccount) => {
    return {
        type: actionTypes.ADD_NEW_ACCOUNTS_ACTION,
        payload: {
            newAccount: newAccount
        }
    }
}

export const DELETE_ACCOUNT_ACTION = (id) => {
    //console.log(id)
    return {
        type: actionTypes.DELETE_ACCOUNT_ACTION,
        payload: {
            id: id
        }
    }
}