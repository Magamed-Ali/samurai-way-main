import React, {RefObject, useState} from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {PostType} from "../../../redux/state";



type postType = {
    posts: Array<PostType>
    addPost: (newMessage: string) => void
}

const MyPosts = (props: postType) => {

    let newPostCreateElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const newAddPost = () => {
        if(newPostCreateElement.current){
        props.addPost(newPostCreateElement.current.value)
    }
        console.log(props.posts)
    }



    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostCreateElement}></textarea>
                </div>
                <button onClick={newAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            {
                props.posts.map(post => (
                    <Posts message={post.message} key={post.id}/>
                ))
            }
        </div>
    )
}

export default MyPosts;