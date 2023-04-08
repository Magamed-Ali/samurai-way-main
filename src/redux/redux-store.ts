import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {usersReducer} from "./users-reducer";
import {reducerAuth} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

export const rootReducer = combineReducers({
        profile: profileReducer,
        message: messageReducer,
        usersPage: usersReducer,
        authUser: reducerAuth

    }
)

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store
