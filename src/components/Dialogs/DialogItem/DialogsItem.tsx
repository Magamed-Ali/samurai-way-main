import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";



const DialogItem = (props: DialogType) => {

    return <div className={s.dialog}>
        <img src={props.img} className={s.dialogsImg}/><NavLink to={`dialog/${props.id}`}>{props.name}</NavLink>
    </div>
}

export default DialogItem;