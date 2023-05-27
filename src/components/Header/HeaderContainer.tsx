import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserThank} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    login: string | null
    isAuth: boolean
}

type MyDispatchToProps = {
    getAuthUserThank: () => void
}

export type UsersContainerType = MyMapStateToProps & MyDispatchToProps

const mapStateToProps = (state: AppStateType): MyMapStateToProps => ({
    login: state.authUser.login,
    id: state.authUser.id,
    isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {getAuthUserThank})(HeaderContainer)

