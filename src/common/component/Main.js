import React, {useState} from 'react';

function Main(props){
    const {children, fold} = props;

    return (
        <div id="main" style={{transform : `translateX(${fold?4.5:0}rem)`}}>
            {children}
        </div>
    )
}

export default Main;
