import {LOADING, LOAD_END, LOAD_ALL} from '../action/getWorks';
const defaultWorksState = {
    works : [],
    loading : false,
    loadEnd : true,
    loadAll : false,
    page : 1
};
export default function works(state = defaultWorksState, {type, payload}){
    switch (type) {
        case LOADING :
            return {
                ...state,
                loading : true
            };
        case LOAD_END:
            return {
                ...state,
                loading : false,
                loadEnd : true,
                page : ++ state.page,
                works : state.works.concat(payload.works)
            };
        case LOAD_ALL:
            return {
                ...state,
                loadAll: true
            };
        default :
            return state;
    }
}