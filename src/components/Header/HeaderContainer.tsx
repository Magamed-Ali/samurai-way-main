import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserAC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

class HeaderContainer extends Component<UsersContainerType> {
    /* constructor(props: any) {
         super(props);
     }*/
    componentDidMount() {

        /** axios api*/
        usersAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    console.log(data.data.id)
                    this.props.setAuthUserAC(login, id, email)
                }
            })
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
    setAuthUserAC: (login: string, userId: number, email: string) => void
}

export type UsersContainerType = MyMapStateToProps & MyDispatchToProps

const mapStateToProps = (state: AppStateType): MyMapStateToProps => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login,
    id: state.authUser.id
})

export default connect(mapStateToProps, {setAuthUserAC})(HeaderContainer)