import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type LinkNameType = {
    name: string
    id: string
}

export type MessageType = {
    messages: string
}

const DialogItem = (props: LinkNameType) => {
    return <div className={s.dialog}>
        <NavLink to={`dialog/${props.id}`}>{props.name}</NavLink>
    </div>
}
const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.messages}</div>
}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Masha" id="4"/>
                <DialogItem name="Pasha" id="5"/>
            </div>
            <div className={s.messages}>
                <Message messages="Hi"/>
                <Message messages="How is your it-kamasutra?"/>
                <Message messages="Yo"/>
            </div>
        </div>
    );
}

export default Dialogs;