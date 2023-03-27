import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    currentPageAC,
    followAC, isLoadingAC,
    pageSizeAC,
    PostType,
    setUsersAC, toggleFollowingProgressAC, totalUserCounterAC,
    unFollowAC
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

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
    /*Followed = (i: any, id: string) => {
        i.followed ? this.props.unFollowAC(id) : this.props.followAC(id)
    }*/
    componentDidMount() {

        this.props.isLoadingAC(true)

        /** axios api*/
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isLoadingAC(false)
                this.props.setUsersAC(data.items)
                this.props.totalUserCounterAC(data.totalCount)
            })
    }
    CurrentPage = (item: number) => {
        this.props.isLoadingAC(true)

        /** axios api*/
        usersAPI.getUsers(item, this.props.pageSize)
            .then(data => {
                this.props.isLoadingAC(false)
                this.props.setUsersAC(data.items)
                this.props.currentPageAC(item)
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
            unFollowAC={this.props.unFollowAC}
            followAC={this.props.followAC}
            isLoading={this.props.isLoading}
            toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
            followingInProgress={this.props.followingInProgress}
        />
    }
}

type MyMapStateToProps = {
    users: PostType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: any[]
}
type MyDispatchToProps = {
    followAC: (userId: string) => void
    unFollowAC: (userId: string) => void
    setUsersAC: (users: any) => void
    pageSizeAC: (id: number) => void
    currentPageAC: (id: number) => void
    totalUserCounterAC: (id: number) => void
    isLoadingAC: (load: boolean) => void
    toggleFollowingProgressAC: (isFetching: boolean, id: any) => void
}
export type UsersContainerType = MyMapStateToProps & MyDispatchToProps
const mapStateToProps = (state: AppStateType): MyMapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*const dispatchStateToProps = (dispatch: Dispatch): MyDispatchToProps => {return {
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
    }}*/

export default connect(mapStateToProps,

    {
        followAC,
        unFollowAC,
        setUsersAC,
        pageSizeAC,
        currentPageAC,
        totalUserCounterAC,
        isLoadingAC,
        toggleFollowingProgressAC
    })(UsersContainer)