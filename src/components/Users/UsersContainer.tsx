import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followThunk,
    getUsersThunk,
    PostType,
    toggleFollowingProgressAC,
    unFollowThunk
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

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

    componentDidMount() {
        const {currentPage, pageSize} = this.props

        this.props.getUsersThunk(currentPage, pageSize)
    }

    CurrentPage = (item: number) => {
        const {getUsersThunk, pageSize} = this.props
        getUsersThunk(item, pageSize)
    }

    render() {
        const {
            totalUsersCount,
            pageSize,
            currentPage,
            users,
            isLoading,
            followingInProgress,
            toggleFollowingProgressAC,
            followThunk,
            unFollowThunk
        } = this.props

        let pagesCount = totalUsersCount / pageSize;
        let pages = [];

        for (let i = 1; i <= Math.ceil(pagesCount); i++) {
            pages.push(i)
        }

        return <Users
            pages={pages}
            CurrentPage={this.CurrentPage}
            currentPage={currentPage}
            users={users}
            isLoading={isLoading}
            toggleFollowingProgressAC={toggleFollowingProgressAC}
            followingInProgress={followingInProgress}
            followThunk={followThunk}
            unFollowThunk={unFollowThunk}
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
    toggleFollowingProgressAC: (isFetching: boolean, id: any) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followThunk: (id: string) => void
    unFollowThunk: (id: string) => void
}
export type UsersContainerType = MyMapStateToProps & MyDispatchToProps
const mapStateToProps = (state: AppStateType): MyMapStateToProps => {
    return {
        users: getUsers(state),
        //users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        toggleFollowingProgressAC,
        getUsersThunk,
        followThunk,
        unFollowThunk
    }),
    withRouter
)(UsersContainer)