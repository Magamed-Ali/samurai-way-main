import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsType,
    TypeMessage,
} from "../../redux/store";
import {addMessageBody, updateNewMessageBody} from "../../redux/messageReducer";


type DialogsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogsPage: TypeMessage
}

function Dialogs(props: DialogsType) {

    const changeNewMessageBody = () => {
        props.sendMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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
                                <Message messages={mes.messages} key={mes.id}/>
                            ))
                        }
                    </div>


                </div>
            </div>
            <div className={s.textareaBox}>
                <textarea
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageBody}
                    className={s.textareaText}>

                </textarea>
                <button onClick={changeNewMessageBody} className={s.textareaBtn}>add1</button>
            </div>
        </div>


    );
}

export default Dialogs;