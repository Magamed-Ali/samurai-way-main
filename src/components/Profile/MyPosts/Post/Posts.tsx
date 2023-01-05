import React from "react";
import s from "./Posts.module.css";


export type TypePost = {
    message: string
}
const Posts = (props: TypePost) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SLYLbmf6wtjV_fj26W03NZwKo94mUvE-kA&usqp=CAU'/>
                {props.message}
            </div>

        </div>
    )
}

export default Posts;