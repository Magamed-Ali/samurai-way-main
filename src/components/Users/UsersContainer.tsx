import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, PostType, profileType, setUsersAC, UnFollowAC} from "../../redux/users-reducer";
import { UsersC } from './UsersC';

type MyMapStateToProps = {
    users: PostType[]
}
type MyDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: any) => void
}
export type UsersContainerType = MyMapStateToProps & MyDispatchToProps
const mapStateToProps = (state: AppStateType): MyMapStateToProps => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, dispatchStateToProps)(UsersC)