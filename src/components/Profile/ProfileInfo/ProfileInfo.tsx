import React from 'react';
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
                    alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;