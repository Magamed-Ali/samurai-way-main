import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followThunk, getUsersThunk,
    PostType,
    toggleFollowingProgressAC, unFollowThunk
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";

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
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    CurrentPage = (item: number) => {
        this.props.getUsersThunk(item, this.props.pageSize)
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
            isLoading={this.props.isLoading}
            toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
            followingInProgress={this.props.followingInProgress}
            followThunk={this.props.followThunk}
            unFollowThunk={this.props.unFollowThunk}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
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

/*export const withAuthRedirect(connect(mapStateToProps,

    {
        toggleFollowingProgressAC,
        getUsersThunk,
        followThunk,
        unFollowThunk
    })(UsersContainer))*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            toggleFollowingProgressAC,
            getUsersThunk,
            followThunk,
            unFollowThunk
        }),
    withRouter
)(UsersContainer)