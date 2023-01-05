import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Posts message={"Hi, how are you?"}/>
            <Posts message={"It`s my first post"}/>
            <Posts message={"Hello"}/>
        </div>
    )
}

export default MyPosts;