import React, {ChangeEvent, RefObject} from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {profileType} from "../../../redux/store";

type MyPost = {
    updateNewPostText: (text: string) => void
    newAddPost: () => void
    profilePages: profileType
}
const MyPosts = (props: MyPost) => {

    let newPostCreateElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onAddPost = () => {
        props.newAddPost()
    }
    const onAddPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea value={props.profilePages.newPostText} onChange={onAddPostChange}
                              ref={newPostCreateElement}></textarea>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            {
                props.profilePages.postsMessage.map(post => (
                    <Posts message={post.message} key={post.id}/>
                ))
            }
        </div>
    )
}

export default MyPosts;