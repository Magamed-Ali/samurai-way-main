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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const PAGE_SIZE = "PAGE_SIZE";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USER_COUNTER = "TOTAL_USER_COUNTER";
const LOADING_PRELOADER = "LOADING_PRELOADER"

type AllFollowAC =
    ReturnType<typeof followAC> |
    ReturnType<typeof UnFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof pageSizeAC> |
    ReturnType<typeof currentPageAC> |
    ReturnType<typeof totalUserCounterAC> |
    ReturnType<typeof isLoadingAC>

let initialState: profileType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 20,
    currentPage: 1,
    isLoading: true
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
                ...state, users: [ ...action.payload.users]
            }
        case PAGE_SIZE:
            return {
                ...state, pageSize: action.payload.id
            }
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.payload.id
            }
        case TOTAL_USER_COUNTER:
            return {
                ...state, totalUsersCount: action.payload.id
            }
        case LOADING_PRELOADER:
            return {
                ...state, isLoading: action.loading
            }
    }
    return state
}

export const isLoadingAC = (loading: boolean)=>{
    return{
        type: LOADING_PRELOADER,
        loading
    }as const
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
export const pageSizeAC = (id: number) => {
    return{
        type: PAGE_SIZE,
        payload: {
            id
        }
    }as const
}
export const currentPageAC = (id: number) => {
    return{
        type: CURRENT_PAGE,
        payload: {
            id
        }
    }as const
}
export const totalUserCounterAC = (id: number) => {
    return{
        type: TOTAL_USER_COUNTER,
        payload: {
            id
        }
    }as const
}


