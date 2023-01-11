import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {

    return (
        <div>
            <div>
                <img src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg" alt="img"/>
            </div>
            <div>ava + description</div>
            <MyPosts />
        </div>
    )
}


export default Profile;