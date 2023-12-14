import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATE";
const CHANGE_IS_AUTH = "CHANGE_IS_AUTH";

type stateTypeAuth = {
    id: number | null
    email: null | string
    login: null | string
    isAuth: boolean

}
let initialState = {
    id: 0,
    email: "sd",
    login: "free",
    isAuth: false
}

type actionType = setUserAC | ChangeIsAuthAC
type setUserAC = ReturnType<typeof setAuthUserAC>
type ChangeIsAuthAC = ReturnType<typeof ChangeIsAuthAC>
export const reducerAuth = (state: stateTypeAuth = initialState, action: actionType): stateTypeAuth => {
    switch (action.type) {
        case SET_USER_DATA:

            return (
                {...state, ...action.payload}
        )
        case CHANGE_IS_AUTH:

            return {...state, isAuth: action.isAuth}
        default: return state
    }
}

export const setAuthUserAC = (login: string | null, id: number | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const ChangeIsAuthAC = (isAuth: boolean = true) => {
    console.log(isAuth)
    return {
        type: CHANGE_IS_AUTH,
        isAuth
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserAC(login, id, email, true))
                    dispatch(ChangeIsAuthAC())
                }
            })
    }
}
export const loginAuth = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultcode === 0){
                    dispatch(getAuthUserData())
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultcode === 0){
                    dispatch(setAuthUserAC(null, null, null, false))
                }
            })
    }
}

