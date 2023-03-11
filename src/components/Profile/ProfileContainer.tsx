import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {profileType, setUserProfileAC} from "../../redux/profileReducer";


class ProfileContainer extends React.Component<ProfileStateType>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
    setUserProfileAC: (load: "") => void
}
type ProfileStateType = mapDispatchToProps & mapStateToPropsType
let mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return {
        profile: state.profile.profile
    }
}
export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer);