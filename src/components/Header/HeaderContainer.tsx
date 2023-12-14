import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends Component<UsersContainerType> {
    componentDidMount() {

        /** axios api*/
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>;
    }
}
type MyMapStateToProps = {
    email?: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

type MyDispatchToProps = {
    getAuthUserData: () => void
    logout: () => void
}

export type UsersContainerType = MyMapStateToProps & MyDispatchToProps

const mapStateToProps = (state: AppStateType): MyMapStateToProps => ({
    login: state.authUser.login,
    id: state.authUser.id,
    isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)

