import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusThink, getUserProfileThink, updateStatusThink} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
    id: string
}
class ProfileContainer extends React.Component<ProfileStateType & RouteComponentProps<PathParamsType>>{

    componentDidMount() {
        /**получение текушей id страницы*/
        let id = this.props.match.params.id

        if(!id){
            debugger
            id = this.props.authorizedUserId
        }
        this.props.getUserProfileThink(id)
        this.props.getStatusThink(id)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStateType & RouteComponentProps<PathParamsType>>, prevState: Readonly<{}>, snapshot?: any) {

        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatusThink={this.props.updateStatusThink}
        />
    }
}

export type mapStateToPropsType = {
    profile: any
    status: string
    authorizedUserId: any
    isAuth: boolean
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
        status: state.profile.status,
        authorizedUserId: state.authUser.id,
        isAuth: state.authUser.isAuth
    }
}

/*export default withAuthRedirect(withRouter(connect(mapStateToProps, {getUserProfileThink})(ProfileContainer)));*/

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThink, getStatusThink, updateStatusThink}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
