import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/redux-store";
import {App} from "./App";
import {Provider} from "./StoreContext";


let rerenderEntiretTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntiretTree();

store.subscribe(() => {

    rerenderEntiretTree()
})
