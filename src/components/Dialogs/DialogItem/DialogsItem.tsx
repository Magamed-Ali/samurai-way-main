import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../App";

const DialogItem = (props: DialogType) => {

    return <div className={s.dialog}>
        <NavLink to={`dialog/${props.id}`}>{props.name}</NavLink>
    </div>
}

export default DialogItem;