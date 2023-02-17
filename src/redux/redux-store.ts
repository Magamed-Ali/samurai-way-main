import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";


export const reducers = combineReducers({
    profile: profileReducer,
    message: messageReducer

}
)
export const store = createStore(reducers)

