import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type postType = {
    store: StoreType
}
const Profile = (props: postType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                /*dispatch={props.store.dispatch.bind(store)}
                profilePages={props.store.getState().profile}*//>
        </div>
    )
}

export default Profile;