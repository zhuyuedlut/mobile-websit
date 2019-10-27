import {LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../action/login';

const defaultUserState = {
    name : ''
};

export default function user(state = defaultUserState, action){
    switch (action) {
        case LOGIN_BEGIN:
            return {name : ''};
        case LOGIN_SUCCESS:
            return {name : action.payload.name}
        case LOGIN_FAILED:
            return {name : ''};
    }
    return state;
}
