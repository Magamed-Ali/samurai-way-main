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
import {stateType} from "./redux/state";
import Friends from './components/Friends/Friends';

type AppType = {
    appState: stateType
    addPost: (newMessage: string) => void
}
const App: React.FC<AppType> = ({
    appState,
    addPost
                                  }) => {

    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />

            <div className="app-wrapper-content">
                <Route path="/profile"  render={() => <Profile posts={appState.profile} addPost={addPost}/>}/>
                <Route path="/messages" render={() => <Dialogs state={appState}/>}/>
                <Route path="/news" render={() => <News />}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
