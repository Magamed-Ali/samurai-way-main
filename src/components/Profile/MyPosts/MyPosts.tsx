import React, {ChangeEvent, ChangeEventHandler, RefObject, useState} from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {PostType, profileType} from "../../../redux/state";
type postType = {
    posts: profileType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: postType) => {

    let newPostCreateElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const newAddPost = () => {
        props.addPost();
        props.updateNewPostText("")

    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea value={props.posts.newPostText} onChange={onPostChange}
                              ref={newPostCreateElement}></textarea>
                </div>
                <button onClick={newAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            {
                props.posts.postsMessage.map(post => (
                    <Posts message={post.message} key={post.id}/>
                ))
            }
        </div>
    )
}

export default MyPosts;