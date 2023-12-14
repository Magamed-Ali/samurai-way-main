import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";


export const App: React.FC = () => {

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
