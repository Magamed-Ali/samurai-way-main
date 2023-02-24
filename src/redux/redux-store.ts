import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {usersReducer} from "./users-reducer";



export const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    usersPage: usersReducer

}
)

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

