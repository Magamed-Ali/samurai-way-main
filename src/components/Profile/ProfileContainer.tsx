import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {getUserProfileThink} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";


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
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

export type mapStateToPropsType = {
    profile: any
}
type mapDispatchToProps = {
    getUserProfileThink: (load: string) => void
}
type ProfileStateType = mapDispatchToProps & mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        profile: state.profile.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let AuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent)

export default connect(mapStateToProps, {getUserProfileThink})(AuthRedirectComponent);