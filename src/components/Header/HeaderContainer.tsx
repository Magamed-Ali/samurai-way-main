import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserThank} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends Component<UsersContainerType> {
    componentDidMount() {

        /** axios api*/
        this.props.getAuthUserThank()
    }
    render() {
        return <Header {...this.props}/>;
    }
}
type MyMapStateToProps = {
    email?: string
    id: number
    isAuth: boolean
    login: string | null
}

type MyDispatchToProps = {
    getAuthUserThank: () => void
}

export type UsersContainerType = MyMapStateToProps & MyDispatchToProps

const mapStateToProps = (state: AppStateType): MyMapStateToProps => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login,
    id: state.authUser.id
})

export default connect(mapStateToProps, {getAuthUserThank})(HeaderContainer)