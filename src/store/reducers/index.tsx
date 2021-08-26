import { combineReducers } from "redux"
import { bankReducer } from "./bankReducer"
import {listReducer} from "./listReducer"
import {notificationReducer} from "./notificationReducer"

const reducers = combineReducers({
    bank: bankReducer,
    list: listReducer,
    notification: notificationReducer
});

export default reducers
