import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATE = "SET_USER_DATE"

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

type actionType = setUserAC
type setUserAC = ReturnType<typeof setAuthUserAC>
export const reducerAuth = (state: stateTypeAuth = initialState, action: actionType): stateTypeAuth => {
    switch (action.type) {
        case SET_USER_DATE:

            return (
                {...state, ...action.payload}
        )
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

export const getAuthUserThank = () => {
    return (dispatch: Dispatch) => {
        usersAPI.getHeader()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserAC(login, id, email))
                }
            })
    }
}


