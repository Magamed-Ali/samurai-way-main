import React from 'react';
import s from './../Dialogs.module.css'
import {messagesType} from "../../../redux/messageReducer";

const Message = (props: messagesType) => {
    return <div className={s.dialog}>{props.messages}</div>
}

export default Message;