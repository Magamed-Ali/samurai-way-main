import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

type stateTypeAuth = {
    initialized: boolean

}
let initialState = {
    initialized: false,
}

type actionType = setUserAC | ChangeIsAuthAC
type setUserAC = ReturnType<typeof initializedSuccess>
type ChangeIsAuthAC = ReturnType<typeof initializedSuccess>
export const appReducer = (state: stateTypeAuth = initialState, action: actionType): stateTypeAuth => {
    switch (action.type) {
        case SET_INITIALIZED:

            return (
                {...state, initialized: true}
        )
        default: return state
    }
}

export const initializedSuccess = () => {
    return {
        type: SET_INITIALIZED,
    } as const
}

export const initializeApi = () => {
    return (dispatch: Dispatch<any>) => {
        let promise = dispatch(getAuthUserData());

        //dispatch(somethingelse());
        //dispatch(somethingelse());
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess());
            });
    }
}

