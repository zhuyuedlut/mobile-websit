import React from 'react';

function Child(props){
    console.log("子组件渲染");
    const {sum} = props;
    return (
        <div>
            <h1>这里是子组件</h1>
            <hr />
            <h3>{sum}</h3>
        </div>
    )
}

export default Child;