import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'assets/styles/global.module.css';
import 'index.css'
import { createStore } from 'redux'
import ourReducer from 'Redux/reduser';
import { Provider } from 'react-redux'
import { initialState } from 'Redux/reduser';


const store = createStore(ourReducer , initialState)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App  />
        </BrowserRouter>
    </Provider>


    , document.getElementById('root')

);


