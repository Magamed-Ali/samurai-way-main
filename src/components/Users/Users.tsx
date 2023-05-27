import s from "./Users.module.css";
import React, {Component} from "react";
import {
    PostType
} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";
import {NavLink, Redirect} from "react-router-dom";

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

            return (<div>
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
                                        /** api */
                                        this.props.unFollowThunk(i.id)

                                    }
                                    } disabled={this.props.followingInProgress.some(id => id === i.id)}>UnFollowed</button>
                                    : <button onClick={() => {
                                        /** api  */
                                        this.props.followThunk(i.id)
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
            </div>)


    }
}

