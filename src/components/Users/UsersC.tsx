import React, {Component} from 'react';
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";

type valueType = {
    value: number
}
export class UsersC extends Component<UsersContainerType, valueType> {
    constructor(props: UsersContainerType) {
        super(props);
        this.state = {
            value: 1
        }
        this.CurrentPage = this.CurrentPage.bind(this);
    }



    Followed = (i: any, id: string) => {
        i.followed ? this.props.unFollow(id) : this.props.follow(id)
    }

    componentDidMount() {
        this.props.users && axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCounter(response.data.totalCount)
                console.log(response.data.totalCount / 100)
            })
    }
    componentDidUpdate() {
    }
    componentWillUnmount() {
    }

    CurrentPage = (item: number) => {
        this.props.users && axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(item)
            })
    }
    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];

        for (let i = 1; i <=  Math.ceil(pagesCount); i++) {
            pages.push(i)
        }


        return (
            <div>
                <div className={s.pagination}>
                    {pages && pages.map(item =>{
                            return (
                                <span className={`${this.props.currentPage === item ? s.active : s.item}`}
                                onClick={() => this.CurrentPage(item)}
                                >{item}</span>
                            )
                        }).slice(0, 10)
                    }
                    <span>....</span>
                </div>

                {/*<button onClick={this.addUsers}>add Users</button>*/}
                {
                    this.props.users/*.filter(i => i.photos.small !== null)*/
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
