import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {log} from "util";

const SET_USER_DATE = "SET_USER_DATE";
const CHANGE_IS_AUTH = "CHANGE_IS_AUTH";

type stateTypeAuth = {
    id: number
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
        case SET_USER_DATE:

            return (
                {...state, ...action.payload}
        )
        case CHANGE_IS_AUTH:

            return {...state, isAuth: true}
        default: return state
    }
}

export const setAuthUserAC = (login: string, id: number, email: string) => {
    return {
        type: SET_USER_DATE,
        payload: {
            id,
            login,
            email
        }
    } as const
}

export const ChangeIsAuthAC = () => {
    return {
        type: CHANGE_IS_AUTH
    } as const
}

export const getAuthUserThank = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserAC(login, id, email))
                    dispatch(ChangeIsAuthAC())
                }
            })
    }
}


