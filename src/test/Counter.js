import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    console.log(props);
    const {count} = props;

    function handleBtnClick(){
        props.dispatch({type : 'add'})
    }

    return(
        <div>
            <div>数字：{count}</div>
            <hr />
            <button onClick={handleBtnClick}>+</button>
            <button>-</button>
        </div>
    )
}

export default connect((state)=>{
    console.log(state);
    return {
        count : state.reducer1
    }
})(Counter);

