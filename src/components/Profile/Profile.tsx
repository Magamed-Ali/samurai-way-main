import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {profileType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type postType = {
    posts: profileType
    addPost: (newMessage: string) => void
}
const Profile = (props: postType) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts.postsMessage} addPost={props.addPost}/>
        </div>
    )
}


export default Profile;