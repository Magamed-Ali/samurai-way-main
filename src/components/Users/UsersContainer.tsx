import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    currentPageAC,
    followAC, isLoadingAC,
    pageSizeAC,
    PostType,
    profileType,
    setUsersAC, totalUserCounterAC,
    UnFollowAC
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

type valueType = {
    value: number
}

class UsersContainer extends Component<UsersContainerType, valueType> {
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
        this.props.setIsLoading(true)
        this.props.users && axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
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
        this.props.setIsLoading(true)
        this.props.users && axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(item)
            })
    }

    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;
        let pages = [];

        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i)
        }

        return <Users
            pages={pages}
            CurrentPage={this.CurrentPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            Followed={this.Followed}
            isLoading={this.props.isLoading}
        />
    }
}

type MyMapStateToProps = {
    users: PostType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
type MyDispatchToProps = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: any) => void
    setPageSize: (id: number) => void
    setCurrentPage: (id: number) => void
    setTotalUserCounter: (id: number) => void
    setIsLoading: (load: boolean) => void
}
export type UsersContainerType = MyMapStateToProps & MyDispatchToProps
const mapStateToProps = (state: AppStateType): MyMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
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
        },
        setIsLoading: (load: boolean) => {
            dispatch(isLoadingAC(load))
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(UsersContainer)