import { createStore } from "redux";
import logger from 'redux-logger';
 import { applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer"; 
import { thunkMiddleware } from "redux-thunk";


/* const myFunc = function(store) {
    return function(next){
        return function(action){
            console.log('State before ' , store.getState());
            console.log('action ' , action);
            next(action);
            console.log('state after', store.getState())
        }
    }
}
 */


const store = createStore(rootReducer,applyMiddleware(logger,thunkMiddleware));

export default store;