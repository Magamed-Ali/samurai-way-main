import React from 'react';

import {
    StoreType
} from "../../redux/store";
import {addMessageBody, updateNewMessageBody} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsType = {
    store: StoreType
}

export function DialogsContainer(props: DialogsType) {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const changeNewMessageBody = () => {
                    store.dispatch(addMessageBody())
                }

                const onMessageChange = (text: string) => {
                    let actionMessage = updateNewMessageBody(text)
                    store.dispatch(actionMessage)
                }
                return <Dialogs
                    updateNewMessageBody={onMessageChange}
                    sendMessage={changeNewMessageBody}
                    dialogsPage={store.getState().message}
                />
            }
            }

        </StoreContext.Consumer>

    );
}