import {v1} from "uuid";
import {addMessageBody, updateNewMessageBody} from "./messageReducer";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
type PostType = {
    id: string
    message: string
    likesCount: number
}
export type profileType = {
    postsMessage: Array<PostType>
    newPostText: string
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>


let initialState: profileType = {
    postsMessage: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It`s my first post", likesCount: 9},
        {id: v1(), message: "Hello", likesCount: 4}
    ],
    newPostText: "it-kamasutra"
}


export const profileReducer = (state: profileType = initialState, action: ActionsType): profileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postsMessage = [...state.postsMessage]
            stateCopy.postsMessage.push(newPost);
            stateCopy.newPostText = ""
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newText: string | "") => ({
    type: ADD_POST,
    newText: newText
} as const)
export const updateNewPostTextActionCreator = (newText: string | "") => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
} as const)
