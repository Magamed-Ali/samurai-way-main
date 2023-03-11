import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends/Friends';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




export const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className="app-wrapper-content">
                <Route exact path="/" component={ProfileContainer} />
                <Route path="/profile/:id?" render={() =>
                    <ProfileContainer />}/>

                <Route path="/messages" render={() =>
                    <DialogsContainer />}/>
                <Route path="/users" render={() =>
                    <UsersContainer/> }/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    );
}
