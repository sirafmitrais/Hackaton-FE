import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'

import { reducers } from ".";
import { listReducer } from "./reducers/listReducer";
import { notificationReducer } from "./reducers/notificationReducer";

const store = createStore(
    reducers, 
    {},
    applyMiddleware(thunk)
)


const rootReducer = combineReducers({
    list: listReducer,
    notification: notificationReducer
  });


export type RootState = ReturnType<typeof rootReducer>;

export default store;