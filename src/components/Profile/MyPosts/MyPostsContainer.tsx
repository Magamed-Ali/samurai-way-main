import React from "react";
import {addPostActionCreator, profileType, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePages: profileType
}

type MapDispatchProps = {
    updateNewPostText: (text: string) => void
    newAddPost: () => void
}
export type ProfilePagesType = MapStatePropsType & MapDispatchProps
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePages: state.profile
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        updateNewPostText: (text: string) => {

            dispatch(updateNewPostTextActionCreator(text))
        },
        newAddPost: () => {
            dispatch(addPostActionCreator(""))

            dispatch(updateNewPostTextActionCreator(""))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
