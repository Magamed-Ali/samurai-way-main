import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";

import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

type DialogsType = {
    newMessageBody: string
}
function Dialogs(props: DialogsContainerType) {

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {
                        props.dialogsPage.dialogsData.map(item => (
                            <DialogItem name={item.name} id={item.id} img={item.img} key={item.id}/>)
                        )}
                </div>
                <div className={s.messages}>
                    <div>
                        {
                            props.dialogsPage.messagesData.map(mes => (
                                <Message messages={mes.messages} key={mes.id} id={mes.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}


export default Dialogs;

