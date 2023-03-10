import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    currentPageAC,
    followAC,
    pageSizeAC,
    PostType,
    profileType,
    setUsersAC, totalUserCounterAC,
    UnFollowAC
} from "../../redux/users-reducer";
import { UsersC } from './UsersC';

type MyMapStateToProps = {
    users: PostType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MyDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: any) => void
    setPageSize: (id: number) => void
    setCurrentPage: (id: number) => void
    setTotalUserCounter: (id: number) => void
}
export type UsersContainerType = MyMapStateToProps & MyDispatchToProps
const mapStateToProps = (state: AppStateType): MyMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const dispatchStateToProps = (dispatch: Dispatch): MyDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setPageSize: (id: number) => {
          dispatch(pageSizeAC(id))
        },
        setCurrentPage: (id: number)=> {
            dispatch(currentPageAC(id))
        },
        setTotalUserCounter: (id: number) => {
            dispatch(totalUserCounterAC(id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(UsersC)