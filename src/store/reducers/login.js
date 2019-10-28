import {LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED} from '../action/login';

const defaultUserState = {
    name : ''
};

export default function user(state = defaultUserState, {type, payload}){
    switch (type) {
        case LOGIN_SUCCESS:
            return {name : payload.name};
        case LOGIN_FAILED:
            return {name : ''};
        case REGISTER_SUCCESS :
            return {name: payload.name};
        case REGISTER_FAILED :
            return {name : ''};
    }
    return state;
}
