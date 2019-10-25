import React, {useState} from 'react'

function Parent(){
    const [status, setStatus] = useState('1');
    console.log("Parent");
    return (
        <div>
            <div>父组件</div>
            <hr />
            <Child1 status={status} setStatus={setStatus}></Child1>
            <Child2 status={status} setStatus={setStatus}></Child2>
        </div>
    )
}

function Child1(props){
    const {status ,setStatus} = props;
    console.log("Child1");
    return(
        <div style={{display: status=== '1' ? 'block' : 'none'}}>
            <div>子组件1</div>
            <button onClick={()=>{
                setStatus('2');
            }}>显示子组件2</button>
        </div>
    )
}

function Child2(props){
    const {status, setStatus} = props;
    console.log("Child2");
    return(
        <div style={{display: status=== '2' ? 'block' : 'none'}}>
            <div>子组件2</div>
            <button onClick={()=>{
                setStatus('1');
            }}>显示子组件1</button>
        </div>
    )
}

export default Parent;