import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ActionsType, profileType} from "../../../redux/store";

export type MyPostsContainer = {
    dispatch: (action: ActionsType) => void
    profilePages: profileType
}
export const MyPostsContainer = (props: MyPostsContainer) => {

    const newAddPost = () => {
        let action1 = addPostActionCreator("")
        props.dispatch(action1)

        let action2= updateNewPostTextActionCreator("")
        props.dispatch(action2)
    }
    const onPostChange = (text: string) => {
        let action2= updateNewPostTextActionCreator(text)
        props.dispatch(action2)
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            newAddPost={newAddPost}
            profilePages={props.profilePages}
        />
    )
}
