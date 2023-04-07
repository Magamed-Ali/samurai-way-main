import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {usersReducer} from "./users-reducer";
import {reducerAuth} from "./auth-reducer";

export const rootReducer = combineReducers({
        profile: profileReducer,
        message: messageReducer,
        usersPage: usersReducer,
        authUser: reducerAuth

    }
)

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
