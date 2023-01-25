import React, {RefObject} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {DialogType, messagesType, profileType, stateType, TypeMessage} from "../../redux/state";


type DialogsType = {
    state: stateType
}

function Dialogs(props: DialogsType) {

    let textAreaValue: RefObject<HTMLTextAreaElement>  = React.createRef()

    const addMessage = () => {
        console.log(textAreaValue.current?.value)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {
                        props.state.profile.dialogsData.map(item => (
                            <DialogItem name={item.name} id={item.id} img={item.img} key={item.id}/>)
                        )}
                </div>
                <div className={s.messages}>
                    <div>
                        {
                            props.state.message.messagesData.map(mes => (
                                <Message messages={mes.messages} key={mes.id}/>
                            ))
                        }
                    </div>


                </div>
            </div>
            <div className={s.textareaBox}>
                <textarea ref={textAreaValue} className={s.textareaText}></textarea>
                <button onClick={addMessage} className={s.textareaBtn}>add</button>
            </div>
        </div>


    );
}

export default Dialogs;