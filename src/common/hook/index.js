function useBack(history){
    return ()=>{
        history.length > 1 ? history.goBack() : history.push('/');
    }
}

export {useBack};