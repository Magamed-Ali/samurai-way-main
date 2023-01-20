import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType, messagesType} from "../../App";

type DialogsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<messagesType>
}
function Dialogs(props: DialogsType) {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    props.dialogsData.map(item => (
                        <DialogItem name={item.name} id={item.id}/>)
                    )}
            </div>
            <div className={s.messages}>
                {
                    props.messagesData.map(mes => (
                        <Message messages={mes.messages}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Dialogs;