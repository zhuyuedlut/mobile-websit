import {LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED} from '../action/login';

const defaultUserState = {
    username : ''
};

export default function user(state = defaultUserState, {type, payload}){
    switch (type) {
        case LOGIN_SUCCESS:
            return {username : payload.username};
        case LOGIN_FAILED:
            return {username : ''};
        case REGISTER_SUCCESS :
            return {username: payload.username};
        case REGISTER_FAILED :
            return {username : ''};
    }
    return state;
}
