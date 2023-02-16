import React, {ChangeEvent, RefObject} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsType,
    TypeMessage,
} from "../../redux/state";
import {addMessageBody, updateNewMessageBody} from "../../redux/messageReduser";


type DialogsType = {
    message: TypeMessage
    dispatch: (action: ActionsType) => void
}

function Dialogs(props: DialogsType) {

    let textAreaValue: RefObject<HTMLTextAreaElement>  = React.createRef()

    const changeNewMessageBody = () => {
        props.dispatch(addMessageBody())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let actionMessage = updateNewMessageBody(e.currentTarget.value)
        props.dispatch(actionMessage)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {
                        props.message.dialogsData.map(item => (
                            <DialogItem name={item.name} id={item.id} img={item.img} key={item.id}/>)
                        )}
                </div>
                <div className={s.messages}>
                    <div>
                        {
                            props.message.messagesData.map(mes => (
                                <Message messages={mes.messages} key={mes.id}/>
                            ))
                        }
                    </div>


                </div>
            </div>
            <div className={s.textareaBox}>
                <textarea
                    onChange={onMessageChange}
                    value={props.message.newMessageBody}
                    ref={textAreaValue}
                    className={s.textareaText}>

                </textarea>
                <button onClick={changeNewMessageBody} className={s.textareaBtn}>add1</button>
            </div>
        </div>


    );
}

export default Dialogs;