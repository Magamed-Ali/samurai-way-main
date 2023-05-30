import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import {ProfilePagesType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const MyPosts = (props: ProfilePagesType) => {

   //let newPostCreateElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const onAddPost = (values: any) => {
        props.newAddPost(values.newPostMessage)

    }

    return (
        <div className={s.postsBlock}>
            My posts
            <AddNewMessagePosts onSubmit={onAddPost}/>
            {
                props.profilePages.postsMessage.map(post => (
                    <Posts message={post.message} key={post.id}/>
                ))
            }
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<any>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newPostMessage"} placeholder={"Enter your message"}></Field>
            </div>
            <button>Add post</button>
            <button>Remove</button>
        </form>
    )
}

const AddNewMessagePosts = reduxForm({form: "AddMessageForm"})(AddMessageForm)

export default MyPosts;