import React from 'react';

import {
   StoreType
} from "../../redux/store";
import {addMessageBody, updateNewMessageBody} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";


type DialogsType = {
    store: StoreType
}

export function DialogsContainer(props: DialogsType) {

    const changeNewMessageBody = () => {
        props.store.dispatch(addMessageBody())
    }

    const onMessageChange = (text: string) => {
        let actionMessage = updateNewMessageBody(text)
        props.store.dispatch(actionMessage)
    }

    return (
        <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={changeNewMessageBody}
            dialogsPage={props.store.getState().message}
        />
    );
}