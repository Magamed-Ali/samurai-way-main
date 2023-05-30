import React from 'react';
import {addMessageBody, InitialStateType} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MyDispatchPropsType = {
    sendMessage: (t: string) => void
}
export type DialogsContainerType = MapStatePropsType & MyDispatchPropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.message,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MyDispatchPropsType => {
    return {
        sendMessage: (t: string) => {
            dispatch(addMessageBody(t))
        }
    }
}
/*export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)
