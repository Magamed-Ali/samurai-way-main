import React from "react";
import {addPostActionCreator, profileType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


type MapStatePropsType = {
    profilePages: profileType
}

type MapDispatchProps = {
    newAddPost: (value: string) => void
}
export type ProfilePagesType = MapStatePropsType & MapDispatchProps
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePages: state.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        newAddPost: (value: string) => {
            dispatch(addPostActionCreator(value))
        }
    }
}

/*export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(MyPosts)
