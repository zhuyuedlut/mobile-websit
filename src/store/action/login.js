import HTTP from './http';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function loginBegin(username){
    return {
        type : LOGIN_BEGIN,
        payload : {
            username
        }
    }
}

export function loginSuccess(username){
    return {
        type : LOGIN_SUCCESS,
        payload : {
            username
        }
    }
}

export function loginFailed(){
    return {
        type : LOGIN_FAILED,
        payload : {
            username : ''
        }
    }
}

export function login({username, password}){
    return dispatch=>{
        dispatch(loginBegin());
        return HTTP.post("/user/login", {username, password}).then(res=>{
            dispatch(res.data.code === 0 ? loginSuccess() : loginFailed());
        }).catch((e)=>{
            dispatch(loginFailed());
        })
    }
}
