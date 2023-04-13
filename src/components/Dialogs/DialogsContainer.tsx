import React from 'react';
import {addMessageBody, InitialStateType, updateNewMessageBody} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
}
type MyDispatchPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
export type DialogsContainerType = MapStatePropsType & MyDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.message,
        isAuth: state.authUser.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MyDispatchPropsType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBody(text))
        },
        sendMessage: () => {
            dispatch(addMessageBody())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)