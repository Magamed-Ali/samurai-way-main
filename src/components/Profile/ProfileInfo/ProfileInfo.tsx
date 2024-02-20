import React, {Component} from 'react';
import s from './ProfileInfo.module.css'
import Loader from "../../Loader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

class ProfileInfo extends Component<any> {
    render() {

        const {status, updateStatusThink, profile} = this.props
        return (
            <div>
                <div className={s.content}>
                    <img
                        src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
                        alt="img"/>
                </div>
                <div className={s.descriptionBlock}>
                    <ProfileStatusWithHooks status={status} updateStatusThink={updateStatusThink}/>
                    ava + description
                    <div style={{width: "100px", height: "150px"}}>
                        {typeof profile !== typeof "string" ?
                            <>
                                <img src={profile.photos.small} alt=""
                                     style={{width: "100%", height: "100px"}}/>
                                {profile.fullName}
                            </>
                            :
                            <Loader/>}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;

function useNavigate() {
    throw new Error('Function not implemented.');
}
