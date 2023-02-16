import {
    ActionsType,
    ADD_MESSAGE_BODY,
    TypeMessage,
    UPDATE_NEW_MESSAGE_BODY
} from "./state";
import {v1} from "uuid";

export const messageRedusser = (state: TypeMessage, action: ActionsType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newText;
            return state;

        case "ADD_MESSAGE_BODY":
            let newMessage = {
                id: v1(),
                messages: state.newMessageBody
            }
            state.messagesData.push(newMessage)
            state.newMessageBody = "";
            return state;

        default: return state
    }
}

export const updateNewMessageBody = (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: newText
    }as const
}
export const addMessageBody = () => {
    return {
        type: ADD_MESSAGE_BODY,
    }as const
}