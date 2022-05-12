import accountsReducer from "./accountsReducer";
import displayReducer from "./displayRedicer";

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    accountsData : accountsReducer,
    displayData : displayReducer
})