import React from 'react';
import s from './ProfileInfo.module.css'
import Loader from "../../Loader/Loader";

import {useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";

function ProfileInfo(props: any) {


    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
                    alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description

                <div style={{width: "100px", height: "150px"}}>
                    {typeof props.profile !== typeof "string" ?
                        <>
                            <img src={props.profile.photos.small} alt=""
                                 style={{width: "100%", height: "100px"}}/>
                            {props.profile.fullName}
                        </>
                        :
                        <Loader/>}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

function useNavigate() {
    throw new Error('Function not implemented.');
}
