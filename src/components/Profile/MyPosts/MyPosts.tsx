import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {typeArrayPosts} from "../Profile";


const MyPosts = (props: typeArrayPosts) => {

    console.log(props.posts)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            {
                props.posts.map(post => (
                    <Posts message={post.message}/>
                ))
            }
        </div>
    )
}

export default MyPosts;