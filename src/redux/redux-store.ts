import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";



export const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer

}
)

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

