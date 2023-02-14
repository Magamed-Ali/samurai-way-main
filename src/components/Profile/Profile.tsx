import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ActionsType, profileType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type postType = {
    profilePages: profileType
    dispatch: (action: ActionsType) => void
}
const Profile = (props: postType) => {


    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePages}
                dispatch={props.dispatch}
            />
        </div>
    )
}


export default Profile;