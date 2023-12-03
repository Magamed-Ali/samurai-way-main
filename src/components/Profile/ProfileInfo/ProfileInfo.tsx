import React, {Component, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'
import Loader from "../../Loader/Loader";
import ProfileStatus from "./ProfileStatus";


class ProfileInfo extends Component<any>{
    render() {

        return (
            <div>
                <div className={s.content}>
                    <img
                        src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
                        alt="img"/>
                </div>
                <div className={s.descriptionBlock}>
                    <ProfileStatus status={this.props.status} updateStatusThink={this.props.updateStatusThink}/>
                    ava + description
                    <div style={{width: "100px", height: "150px"}}>
                        {typeof this.props.profile !== typeof "string" ?
                            <>
                                <img src={this.props.profile.photos.small} alt=""
                                     style={{width: "100%", height: "100px"}}/>
                                {this.props.profile.fullName}
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
