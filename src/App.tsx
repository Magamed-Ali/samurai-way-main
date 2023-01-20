import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

export type PostType = {
    id: number
    message: string
}

export type MessageType = {
    messages: string
}

export type DialogType = {
    id: number
    name: string
}

export type messagesType = {
    id: number
    messages: string

}
function App() {

    const postsMessage: Array<PostType> = [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "It`s my first post"},
        {id: 3, message: "Hello"}
    ]
    const dialogsData: Array<DialogType> = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Pasha"},
    ]
    const messagesData: Array<messagesType> = [
        {id: 1, messages: "Hi"},
        {id: 2, messages: "How is your it-kamasutra?"},
        {id: 3, messages: "Yo"}
    ]

    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Navbar />

            <div className="app-wrapper-content">
                <Route path="/profile"  render={() => <Profile posts={postsMessage}/>}/>
                <Route path="/messages" render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>

                <Route path="/news" render={() => <News />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
