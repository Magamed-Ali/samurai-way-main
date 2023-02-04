import {state, stateType, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

let rerenderEntiretTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntiretTree()
subscribe(rerenderEntiretTree)
