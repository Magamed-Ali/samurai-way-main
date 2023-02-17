import {
    ActionsType,
    ADD_POST, profileType,
    UPDATE_NEW_POST_TEXT
} from "./store";
import {v1} from "uuid";

let initialState = {
        postsMessage: [
            {id: v1(), message: "Hi, how are you?", likesCount: 12},
            {id: v1(), message: "It`s my first post",  likesCount: 9},
            {id: v1(), message: "Hello",  likesCount: 4}
        ],
        newPostText: "it-kamasutra"
}
export const profileReducer = (state: profileType = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postsMessage.push(newPost);
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: return state;
    }
}

export const addPostActionCreator = (newText: string | "") => ({
    type: ADD_POST,
    newText: newText
} as const)
export const updateNewPostTextActionCreator = (newText: string  | "") => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}as const)
