import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
export const ADD_POST = "ADD-POST";
export const USERS_PROFILE = "USERS_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";
type PostType = {
    id: string
    message: string
    likesCount: number
}
export type profileType = {
    postsMessage: Array<PostType>
    newPostText: string
    profile: any
    status: string
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfileAC> |
    ReturnType<typeof setStatusActionCreator> |
    ReturnType<typeof deletePostAC>

let initialState: profileType = {
    postsMessage: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It`s my first post", likesCount: 9},
        {id: v1(), message: "Hello", likesCount: 4}
    ],
    newPostText: "it-kamasutra",
    profile: "21244",
    status: ""
}


export const profileReducer = (state: profileType = initialState, action: ActionsType): profileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            }

            return {...state, postsMessage: [...state.postsMessage, newPost]};
        }

        case USERS_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, postsMessage: state.postsMessage.filter(i => i.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

export const setStatusActionCreator = (status: string) => ({
    type: SET_STATUS,
    status
} as const)
export const addPostActionCreator = (newText: string | "") => ({
    type: ADD_POST,
    newText: newText
} as const)
export const setUserProfileAC = (profile: string) => {
    return {
        type: USERS_PROFILE,
        profile
    } as const
}
export const deletePostAC = (postId: string) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const getStatusThink = (userid: any) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userid)
            .then(response => {

                dispatch(setStatusActionCreator(response.data))
            })
    }
}
export const updateStatusThink = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    console.log(response.data)
                    dispatch(setStatusActionCreator(status))
                }
            })
    }
}
export const getUserProfileThink = (userid: any) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userid)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    }
}
