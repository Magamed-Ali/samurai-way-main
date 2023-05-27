import React from 'react';
import {addMessageBody, InitialStateType, updateNewMessageBody} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MyDispatchPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
export type DialogsContainerType = MapStatePropsType & MyDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.message,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)