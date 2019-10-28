import HTTP from './http';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_OUT = 'LOGIN_OUT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

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

export function loginOutSuccess(){
    return {
        type : LOGIN_OUT,
        payload : {
            username : ''
        }
    }
}

export function registerSuccess(username){
    return {
        type : REGISTER_SUCCESS,
        payload : {
            username
        }
    }
}

export function registerFailed(){
    return {
        type : REGISTER_FAILED,
        payload : {
            username : ''
        }
    }
}

export function login(data){
    return dispatch=>{
        return HTTP.post("/user/login", data).then(res=>{
            dispatch(res.data.code === 0 ? loginSuccess(data.username) : loginFailed());
            return res.data;
        }).catch((e)=>{
            dispatch(loginFailed());
        })
    }
}

export function isLogin(){
    return dispatch=>{
        return HTTP.post('/user/islogin').then(res=>{
            if(res.data.code === 0){
                dispatch(loginSuccess(res.data.username))
            }else{
                dispatch(loginFailed());
            }
        }).catch((e)=>{
            console.log(e);
            dispatch(loginFailed());
        })
    }
}

export function loginOut(){
    return dispatch=>{
        return HTTP.post('/user/logout').then((res)=>{
            if(res.data.code === 0){
                dispatch(loginOutSuccess());
            }
        }).catch((e)=>{
            console.error(e);
        })
    }
}

export function register(data){
    return dispatch =>{
        return HTTP.post("/user/register", data).then(res=>{
            dispatch(res.data.code === 0 ? registerSuccess(data.username) : registerFailed());
            return res.data;
        }).catch((e)=>{
            dispatch(registerFailed());
        })
    }
}


