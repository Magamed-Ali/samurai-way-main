import React, {Component} from "react";
import {PostType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    user: PostType
    unFollowThunk: (id: string) => void
    followThunk: (id: string) => void
    followingInProgress: any[]
}

export class User extends Component<UsersType> {
    constructor(props: UsersType) {
        super(props);
    }

    render() {

        const {user, unFollowThunk, followThunk, followingInProgress} = this.props
        return (
            <div key={user.id} className="users">
                            <span className="users-block_left">
                                <NavLink to={`/profile/${user.id}`}>
                                 <img
                                     src={user.photos.small === null ? "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg"
                                         : user.photos.small} alt=""/>
                                    </NavLink>

                                {user.followed
                                    ? <button onClick={() => {
                                        /** api */
                                        unFollowThunk(user.id)

                                    }
                                    } disabled={followingInProgress.some(id => id === user.id)}>UnFollowed</button>
                                    : <button onClick={() => {
                                        /** api  */
                                        followThunk(user.id)
                                    }

                                    } disabled={followingInProgress.some(id => id === user.id)}>Followed</button>
                                }

                            </span>
                <span className="users-block_right">
                                    <div className="users-fullName">
                                        <span>{user.name}</span>
                                        <span>{user.status}</span>
                                    </div>
                                    <div className="users-status">
                                        <span>{user.id}</span>
                                    </div>
                            </span>
            </div>
        )
    }
}

