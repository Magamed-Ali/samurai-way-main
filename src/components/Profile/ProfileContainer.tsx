import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType, store} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import { compose } from "redux";


type PathParamsType = {
    id: string
}
class ProfileContainer extends React.Component<ProfileStateType & RouteComponentProps<PathParamsType>>{

    componentDidMount() {
        /**получение текушей id страницы*/
        let id = this.props.match.params.id

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
                console.log(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

export type mapStateToPropsType = {
    profile: any

}
type mapDispatchToProps = {
    setUserProfileAC: (load: string) => void
}
type ProfileStateType = mapDispatchToProps & mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        profile: state.profile.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//export default compose<React.ComponentType>(connect(mapStateToProps,{setUserProfileAC}),withRouter)(ProfileContainer)
export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent);