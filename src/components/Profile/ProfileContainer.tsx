import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {getUserProfileThink} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    id: string
}
class ProfileContainer extends React.Component<ProfileStateType & RouteComponentProps<PathParamsType>>{

    componentDidMount() {
        /**получение текушей id страницы*/
        let id = this.props.match.params.id

        this.props.getUserProfileThink(id)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to="/login"/>


        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

export type mapStateToPropsType = {
    profile: any
    isAuth: boolean

}
type mapDispatchToProps = {
    getUserProfileThink: (load: string) => void
}
type ProfileStateType = mapDispatchToProps & mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        profile: state.profile.profile,
        isAuth: state.authUser.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//export default compose<React.ComponentType>(connect(mapStateToProps,{setUserProfileAC}),withRouter)(ProfileContainer)
export default connect(mapStateToProps, {getUserProfileThink})(WithUrlDataContainerComponent);