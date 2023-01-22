import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType, messagesType, profileType, stateType, TypeMessage} from "../../redux/state";


type DialogsType = {
    state: stateType
}
function Dialogs(props: DialogsType) {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    props.state.profile.dialogsData.map(item => (
                        <DialogItem name={item.name} id={item.id} img={item.img}/>)
                    )}
            </div>
            <div className={s.messages}>
                {
                    props.state.message.messagesData.map(mes => (
                        <Message messages={mes.messages}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Dialogs;