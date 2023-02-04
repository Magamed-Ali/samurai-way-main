import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {profileType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type postType = {
    profilePages: profileType
    addPost: () => void
    updateNewPostText: (text: string) => void
}
const Profile = (props: postType) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePages}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}


export default Profile;