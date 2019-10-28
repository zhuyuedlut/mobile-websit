import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Child from './Child';

function Counter(props) {
    console.log("父组件渲染");
    const {count} = props;
    const [sum, setSum] = useState(0);
    console.log(sum);

    useEffect(()=>{
        console.log("组件渲染");
    },[]);

    function handleBtnClick(){
        props.dispatch({type : 'add'})
    }

    function handleOwnBtnClick(){
        setSum(sum + 1);
    }

    return(
        <div>
            <div>数字：{count}</div>
            <hr />
            <button onClick={handleBtnClick}>+</button>
            <button>-</button>
            <hr></hr>
            <Child sum={sum} />
            <hr />
            <div>{sum}</div>
            <button onClick={handleOwnBtnClick}>+</button>
        </div>
    )
}

export default connect((state)=>{
    console.log(state);
    return {
        count : state.reducer1
    }
})(Counter);

