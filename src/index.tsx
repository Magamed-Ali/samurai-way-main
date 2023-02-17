import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/redux-store";

let rerenderEntiretTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntiretTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntiretTree(state)
})
