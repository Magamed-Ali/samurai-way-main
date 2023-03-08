import React, {useEffect} from 'react';
import {UsersContainerType} from "./UsersContainer";
import {v1} from "uuid";
import axios from "axios";

export function Users(props: UsersContainerType) {

    const Followed = (i: any, id: string) => {
        i.followed ? props.unFollow(id) : props.follow(id)
    }

    const addUsers = () => {
        if(props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users?count=10")
                .then(response => {
                    props.setUsers(response.data.items)
                    console.log(response.data)
                })
        }
    }


        /*props.setUsers([
            {
                id: v1(),
                img: "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg",
                followed: true,
                fullName: "Dmitry",
                status: " I am s boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                img: "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg",
                followed: false,
                fullName: "Ali",
                status: " I am s Junior",
                location: {city: "Argun", country: "Germany"}
            },
            {
                id: v1(),
                img: "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg",
                followed: true,
                fullName: "Isaa",
                status: " I am s Master",
                location: {city: "Grozny", country: "Austria"}
            }
        ])*/

    console.log(props.users)
    return (
        <div >Users
            <button onClick={addUsers}>add Users</button>
            {
            props.users
                .map(i =>
                        <div className="users">
                            <span className="users-block_left">
                                 <img src={i.photos.small === null ? "https://mediaaid.ru/upload/resize_cache/iblock/f26/375_264_2/7.jpg"
                                     : i.photos.small} alt=""/>
                                    <button onClick={()=> Followed(i, i.id)}>
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
