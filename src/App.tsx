import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import { compose } from 'redux';
import {initializeApi} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Loader from "./components/Loader/Loader";


class App extends  React.Component< {initialized: boolean, initializeApi: () => void }, any>{

    componentDidMount() {

        /** axios api*/
        this.props.initializeApi()
    }
    render() {

        const arrCheck = (value: Array<any>) =>{

            for(let i=0; i < value.length; i++){
                if(Array.isArray(value[i])){
                    return true
                }
            }
            return false
        }

        console.log(arrCheck(['df','df']), "массив")


        if (!this.props.initialized) {

            return <Loader/>
        }
        return (
            <>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route exact path="/" component={ProfileContainer}/>
                        <Route path="/profile/:id?" render={() =>
                            <ProfileContainer/>}/>

                        <Route path="/messages" render={() =>
                            <DialogsContainer/>}/>
                        <Route path="/users" render={() =>
                            <UsersContainer/>}/>

                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/friends" render={() => <Friends/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </>
        );
    }


}
const mapStateToProps = (state: AppStateType) => ({
    initialized: state.appReducer.initialized
})

/*export default connect(mapStateToProps, {initializeApi})(App);*/

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApi}))(App);
