import React, {useState} from 'react'
import {Provider} from 'react-redux';
import store from './redux';
import Counter from './Counter';


function BaseApp(){
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default BaseApp;
