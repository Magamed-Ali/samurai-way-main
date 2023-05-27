import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        isAuth: state.authUser.isAuth,
    }
}
export function withAuthRedirect <T>(Comment: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to="/login"/>

        return <Comment {...restProps as T}/>
    }



    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}