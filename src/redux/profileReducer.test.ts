import React from "react";
import {
    addPostActionCreator, deletePostAC,
    profileReducer,
    profileType,
    setStatusActionCreator,
    setUserProfileAC
} from "./profileReducer";
import {v1} from "uuid";

let state = {
    postsMessage: [
        {id: v1(), message: "Hi, how are you?", likesCount: 12},
        {id: v1(), message: "It`s my first post", likesCount: 9},
        {id: v1(), message: "Hello", likesCount: 4}
    ],
    newPostText: "it-kamasutra",
    profile: "21244",
    status: ""
}
test('new posts should be added', () => {

    let action = addPostActionCreator("Test")

    let newState = profileReducer(state, action)


    expect(newState.postsMessage[3].message).toBe('Test')
})

test('the length of thi new post', () => {

    let action = addPostActionCreator("Test")

    let newState = profileReducer(state, action)

    expect(newState.postsMessage.length).toBe(4);
})

test('Change profile status', () => {

    let action = setUserProfileAC("3333")

    let newState = profileReducer(state, action)

    expect(newState.profile).toBe('3333');

})

test('Change status', () => {

    let action = setStatusActionCreator("Yes")

    let newState = profileReducer(state, action)

    expect(newState.status).toBe('Yes');

})

test('delete post task', () => {

    let action = deletePostAC(state.postsMessage[2].id)

    let newState = profileReducer(state, action)

    expect(newState.postsMessage.length).toBe(2);

})