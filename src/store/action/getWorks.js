import HTTP from './http';

export const LOADING = 'LOADING';
export const LOAD_END = 'LOAD_END';
export const LOAD_ALL = 'LOAD_ALL';

function loading(){
    return {
        type : LOADING,
        payload : {}
    }
}

function loadEnd(works){
    return {
        type : LOAD_END,
        payload : {
            works
        }
    }
}

function loadAll(){
    return {
        type : LOAD_ALL,
        payload : {}
    }
}

export function loadWorks(){
    return (dispatch, getState) =>{
        dispatch(loading());
        let {page} = getState().works;
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`,
            {order : 'desc', sort : 'sort', category_id: 1, recommend: 1 }).then((res)=>{
            if(res.data.length){
                dispatch(loadEnd(res.data));
                return true;
            }else{
                dispatch(loadAll());
                return false;
            }

        })
    }
}