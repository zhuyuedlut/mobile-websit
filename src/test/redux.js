import {createStore, combineReducers} from 'redux';

const reducer1 = (state = 0, action)=>{
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
    }
    return state;
};

const reduce2 = (state = 2, action)=>{
    return state;
};

const store = createStore(combineReducers({reducer1, reduce2}));

export default store;
