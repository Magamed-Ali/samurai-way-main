import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {profileType} from "../../redux/state";

type postType = {
    posts: profileType
}
const Profile = (props: postType) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts.postsMessage}/>
        </div>
    )
}


export default Profile;