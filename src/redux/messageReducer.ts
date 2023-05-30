import {v1} from "uuid";
export const ADD_MESSAGE_BODY = "ADD_MESSAGE_BODY";
export type ActionsType =
    ReturnType<typeof addMessageBody>

export type DialogType = {
    id: string
    name: string
    img?: string
}
export type messagesType = {
    id: string
    messages: string
}
export type initialStateType = {
    messagesData: Array<messagesType>
    dialogsData: Array<DialogType>
    //newMessageBody: string
}

let initialState: initialStateType = {
        messagesData: [
            {id: v1(), messages: "Hi"},
            {id: v1(), messages: "How is your it-kamasutra?"},
            {id: v1(), messages: "Yo"}
        ] as Array<messagesType>,
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
        ] as Array<DialogType>,
}
export type InitialStateType = typeof initialState
export const messageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case ADD_MESSAGE_BODY: {
            /*let newMessage = {
                id: v1(),
                messages: action.text
            }
            let copyState = {...state}
            copyState.messagesData.push(newMessage)
            copyState.newMessageBody = "";*/
            return {
                ...state, messagesData: [...state.messagesData, {id: v1(), messages: action.text}]
            };
        }
        default: return state
    }
}

export const addMessageBody = (text: string) => {
    return {
        type: ADD_MESSAGE_BODY,
        text
    }as const
}