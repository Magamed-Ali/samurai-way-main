import {v1} from "uuid";

type PhotoType = {
    small: null | string
    large: null | string
}
export type PostType = {
    id: string
    name: string
    photos: PhotoType
    followed: boolean
    fullName: string
    status: string | null
}
export type profileType = {
    users: Array<PostType>
}

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS"

type AllFollowAC =
    ReturnType<typeof followAC> |
    ReturnType<typeof UnFollowAC> |
    ReturnType<typeof setUsersAC>

let initialState: profileType = {
    users: [],
}


export const usersReducer = (state: profileType = initialState, action: AllFollowAC): profileType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users
                    .map(i => i.id === action.payload.id ? {...i, followed: true} : i)
            }
        case UN_FOLLOW:
            return {
                ...state, users: state.users
                    .map(i => i.id === action.payload.id ? {...i, followed: false}: i)
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
    }
    return state
}

export const followAC = (newId: string) => {
    return {
        type: FOLLOW,
        payload: {
            id: newId,
        }
    } as const
}
export const UnFollowAC = (newId: string) => {
    return {
        type: UN_FOLLOW,
        payload: {
            id: newId
        }
    }as const
}
export const setUsersAC = (users: PostType[]) => {
    return{
        type: SET_USERS,
        payload: {
            users
        }
    }as const
}


