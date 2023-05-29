import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusThink={props.updateStatusThink}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;