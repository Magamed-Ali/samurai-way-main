import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {getStatusThink, getUserProfileThink, updateStatusThink} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import { compose } from "redux";
import {usersReducer} from "../../redux/users-reducer";

type PathParamsType = {
    id: string
}
class ProfileContainer extends React.Component<ProfileStateType & RouteComponentProps<PathParamsType>>{

    componentDidMount() {
        /**получение текушей id страницы*/
        let id = this.props.match.params.id

        if(!id){
            id = "21244"
        }
        this.props.getUserProfileThink(id)
        this.props.getStatusThink(id)
    }


    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThink={this.props.updateStatusThink}/>
    }
}

export type mapStateToPropsType = {
    profile: any
    status: string
}
type mapDispatchToProps = {
    getUserProfileThink: (load: string) => void
    getStatusThink: (id: string) => void
    updateStatusThink: (status: string) => void
}
type ProfileStateType = mapDispatchToProps & mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        profile: state.profile.profile,
        status: state.profile.status
    }
}

/*export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfileThink})(ProfileContainer)));*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThink, getStatusThink, updateStatusThink}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
