import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType} from "../../App";


export type typeArrayPosts = {
    posts: Array<PostType>
}
const Profile = (props: typeArrayPosts) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts  posts={props.posts}/>
        </div>
    )
}


export default Profile;