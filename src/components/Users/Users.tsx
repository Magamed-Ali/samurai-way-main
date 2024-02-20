import React, {Component} from "react";
import {PostType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import {NavLink} from "react-router-dom";


type UsersType = {
    pages: Array<number>
    CurrentPage: (item: number) => void
    currentPage: number
    users: PostType[]
    isLoading: boolean
    followingInProgress: any[]
    toggleFollowingProgressAC: (isFetching: boolean, id: any) => void
    followThunk: (id: string) => void
    unFollowThunk: (id: string) => void
    isAuth?: boolean
}

export class Users extends Component<UsersType> {
    constructor(props: UsersType) {
        super(props);
    }

    render() {

        const {pages, CurrentPage, currentPage, users, unFollowThunk, followThunk, followingInProgress, isLoading} = this.props
        return (<div>

            <Paginator pages={pages} CurrentPage={CurrentPage} currentPage={currentPage}/>


            {
                users.map(i =>
                    <User user={i}
                          unFollowThunk={unFollowThunk}
                          followThunk={followThunk}
                          followingInProgress={followingInProgress}/>
                )
            }
        </div>)
    }
}

