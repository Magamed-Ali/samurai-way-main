import s from "./Users.module.css";
import React, {Component} from "react";
import {PostType, toggleFollowingProgressAC} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersType = {
    pages: Array<number>
    CurrentPage: (item: number) => void
    currentPage: number
    users: PostType[]
    unFollowAC: (id: string) => void
    followAC: (id: string) => void
    isLoading: boolean
    followingInProgress: any[]
    toggleFollowingProgressAC: (isFetching: boolean, id: any) => void
}

export class Users extends Component<UsersType> {
    constructor(props: UsersType) {
        super(props);
    }

    render() {

        console.log("ttyy", this.props.users)
        return <div>
            <div className={s.pagination}>
                {this.props.pages && this.props.pages.map(item => {
                    return (
                        <span className={`${this.props.currentPage === item ? s.active : s.item}`}
                              onClick={() => this.props.CurrentPage(item)}
                        >{item}</span>
                    )
                }).slice(0, 10)
                }
                <span>....</span>
            </div>

            {this.props.isLoading ? <Loader/> : null}

            {
                this.props.users
                    .map(i =>
                        <div key={i.id} className="users">
                            <span className="users-block_left">
                                <NavLink to={`/profile/${i.id}`}>
                                 <img
                                     src={i.photos.small === null ? "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg"
                                         : i.photos.small} alt=""/>
                                    </NavLink>

                                {i.followed
                                    ? <button onClick={() => {
                                        this.props.toggleFollowingProgressAC(true, i.id)

                                        /** api */
                                        usersAPI.changeUnFollow(i.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    this.props.unFollowAC(i.id)
                                                }
                                                this.props.toggleFollowingProgressAC(false, i.id)
                                            })
                                    }
                                    } disabled={this.props.followingInProgress.some(id => id === i.id)}>UnFollowed</button>
                                    : <button onClick={() => {
                                        this.props.toggleFollowingProgressAC(true, i.id)
                                        /** api */
                                        usersAPI.changeFollow(i.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    this.props.followAC(i.id)
                                                }
                                                this.props.toggleFollowingProgressAC(false, i.id)
                                            })
                                    }

                                    } disabled={this.props.followingInProgress.some(id => id === i.id)}>Followed</button>
                                }

                            </span>
                            <span className="users-block_right">
                                    <div className="users-fullName">
                                        <span>{i.name}</span>
                                        <span>{i.status}</span>
                                    </div>
                                    <div className="users-status">
                                        {/*<span>{i.status}</span>
                                        <span>{i.location.city}</span>*/}
                                    </div>
                            </span>
                        </div>
                    )
            }
        </div>
    }
}

