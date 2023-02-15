import React, {ChangeEvent, RefObject} from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {
    ActionsType,
    addPostActionCreator,
    profileType,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type postType = {
    posts: profileType
    dispatch: (action: ActionsType) => void
}


const MyPosts = (props: postType) => {

    let newPostCreateElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const newAddPost = () => {
        let action1 = addPostActionCreator("")
        props.dispatch(action1)

        let action2= updateNewPostTextActionCreator("")
        props.dispatch(action2)

    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value})*/
        let action2= updateNewPostTextActionCreator(e.currentTarget.value)
        props.dispatch(action2)
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