import {store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntiretTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={store}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntiretTree()
store.subscribe(rerenderEntiretTree)
