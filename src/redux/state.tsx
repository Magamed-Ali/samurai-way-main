import {v1} from "uuid"

export type MessageType = {
    messages: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogType = {
    id: string
    name: string
    img?: string
}
export type messagesType = {
    id: string
    messages: string
}


export type profileType = {
    postsMessage: Array<PostType>
    dialogsData: Array<DialogType>
}
export type TypeMessage = {
    messagesData: Array<messagesType>
}
export type stateType = {
    profile: profileType

    message: TypeMessage
}

export const state: stateType = {
    profile: {
        postsMessage: [
            {id: v1(), message: "Hi, how are you?", likesCount: 12},
            {id: v1(), message: "It`s my first post",  likesCount: 9},
            {id: v1(), message: "Hello",  likesCount: 4}
        ],
        dialogsData: [
            {
                id: v1(),
                name: "Dimych",
                img: "https://s0.tchkcdn.com/g-49bK-ihki_h_sf4gLEKMHQ/17/261234/660x480/f/0/05d_2a99744_dyka_pryroda_bilka_ta_tulpan.jpg"
            },
            {
                id: v1(),
                name: "Andrey",
                img: "https://s0.tchkcdn.com/g-mc6tg-noHZsP7M50PIm7nw/17/261238/540x540/r/0/afb_4a7c281_dyka_pryroda_buket.jpg"
            },
            {
                id: v1(),
                name: "Sveta",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABhZkIKYl32oYZ1FhUHTVKjc-aHzq6pBEfFTHjaHoX3lqJTDXbnsZRWox7eP8AZDRLqM&usqp=CAU"
            },
            {
                id: v1(),
                name: "Masha",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_UPMuHHxl1ormDi6kJwtUjvj8ljwE1sHRE4-VvxaRn4CVePTra66NElbLMO_eEdeGeg&usqp=CAU"
            },
            {id: v1(), name: "Pasha", img: "https://m.ridus.ru/images/2018/9/17/818259/in_article_bb639eadfe.jpg"},
        ]
    },
    message: {
        messagesData: [
            {id: v1(), messages: "Hi"},
            {id: v1(), messages: "How is your it-kamasutra?"},
            {id: v1(), messages: "Yo"}
        ]
    }

}

export const addPost = (newMessage: string) => {
    let newPost = {id: v1(), message: newMessage, likesCount: 0};
    state.profile.postsMessage.push(newPost);
}

