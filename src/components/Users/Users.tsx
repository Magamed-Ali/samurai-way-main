import React from 'react';
import {UsersContainerType} from "./UsersContainer";
import {v1} from "uuid";

export function Users(props: UsersContainerType) {
    console.log()
    const Followed = (i: any, id: string) => {
        i.followed ? props.unFollow(id) : props.follow(id)
    }
    if(props.users.length === 0){
        props.setUsers([
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
        ])
    }
    return (
        <div >Users{
            props.users
                .map(i =>
                        <div className="users">
                            <span className="users-block_left">
                                 <img src={i.img} alt=""/>
                                    <button onClick={()=> Followed(i, i.id)}>
                                        {i.followed ? "Followed" : "UnFollowed"}
                                    </button>
                            </span>
                            <span className="users-block_right">
                                    <div className="users-fullName">
                                        <span>{i.fullName}</span>
                                        <span>{i.location.country}</span>
                                    </div>
                                    <div className="users-status">
                                        <span>{i.status}</span>
                                        <span>{i.location.city}</span>
                                    </div>
                            </span>
                        </div>
                )
        }
        </div>
    );
}
