import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ActionsType, profileType} from "../../../redux/store";
import {StoreContext} from "../../../StoreContext";

export type MyPostsContainer = {
    dispatch?: (action: ActionsType) => void
    profilePages?: profileType
}
export const MyPostsContainer = (props: MyPostsContainer) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                    const newAddPost = () => {
                        let action1 = addPostActionCreator("")
                        store.dispatch(action1)

                        let action2 = updateNewPostTextActionCreator("")
                        store.dispatch(action2)
                    }
                    const onPostChange = (text: string) => {
                        let action2 = updateNewPostTextActionCreator(text)
                        store.dispatch(action2)
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        newAddPost={newAddPost}
                        profilePages={store.getState().profile}
                    />
                }
            }

        </StoreContext.Consumer>

    )
}
