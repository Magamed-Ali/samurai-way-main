import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/store";


const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.messages}</div>
}


export default Message;