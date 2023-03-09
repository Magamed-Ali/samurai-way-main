import React, {Component} from 'react';
import {UsersContainerType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";
import {number} from "prop-types";

type valueType = {
    value: number
}
export class UsersC extends Component<UsersContainerType, valueType> {
    constructor(props: UsersContainerType) {
        super(props);
        this.state = {
            value: 1
        }

        this.addUsers = this.addUsers.bind(this);

    }

    addUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?count=10")
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data)
            })
    }

    Followed = (i: any, id: string) => {
        i.followed ? this.props.unFollow(id) : this.props.follow(id)
    }

    componentDidMount() {
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }



    render() {
        return (
            <div>Users{this.state.value}
                <button onClick={this.addUsers}>add Users</button>
                {
                    this.props.users
                        .map(i =>
                            <div className="users">
                            <span className="users-block_left">
                                 <img
                                     src={i.photos.small === null ? "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg"
                                         : i.photos.small} alt=""/>
                                    <button onClick={() => this.Followed(i, i.id)}>
                                        {i.followed ? "Followed" : "UnFollowed"}
                                    </button>
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
        );
    }


}
