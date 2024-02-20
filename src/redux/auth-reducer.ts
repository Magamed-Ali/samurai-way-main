import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATE";
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
        default:
            return state
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

export const getAuthUserData = () => async (dispatch: Dispatch) => {

    const response = await authAPI.me()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data
        dispatch(setAuthUserAC(login, id, email, true))
        dispatch(ChangeIsAuthAC())
    }
    return 'it-incubatir'
}
export const loginAuth = (email: string, password: string, rememberMe: boolean) => {

    return async (dispatch: Dispatch<any>) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            console.log(response.data)
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const logout = () => {
    return async (dispatch: Dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserAC(null, null, null, false))
        }
    }
}

