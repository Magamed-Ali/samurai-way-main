import {v1} from "uuid";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    followingInProgress: any[]
}

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const PAGE_SIZE = "PAGE_SIZE";
const CURRENT_PAGE = "CURRENT_PAGE";
const TOTAL_USER_COUNTER = "TOTAL_USER_COUNTER";
const LOADING_PRELOADER = "LOADING_PRELOADER";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

type AllFollowAC =
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof pageSizeAC> |
    ReturnType<typeof currentPageAC> |
    ReturnType<typeof totalUserCounterAC> |
    ReturnType<typeof isLoadingAC> |
    ReturnType<typeof toggleFollowingProgressAC>

let initialState: profileType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 20,
    currentPage: 1,
    isLoading: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:

            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userID]
                    : [...state.followingInProgress.filter(id => id !== action.payload.userID)]
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
export const unFollowAC = (newId: string) => {
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
export const toggleFollowingProgressAC = (isFetching: boolean, userID: any) => {
    return{
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            userID
        }
    }as const
}

export const getUsersThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(isLoadingAC(true))
        /** axios api*/
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isLoadingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(totalUserCounterAC(data.totalCount))
            })
    }
}

export const followThunk = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, id))
        /** axios api*/
        usersAPI.follow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(toggleFollowingProgressAC(false, id))
            })
    }
}

export const unFollowThunk = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgressAC(true, id))
        /** axios api*/
        usersAPI.unfollow(id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowAC(id))
                }
                dispatch(toggleFollowingProgressAC(false, id))
            })
    }
}
