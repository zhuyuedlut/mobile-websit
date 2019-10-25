import React, {Fragment, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
function Frame(props){
    const {children} = props;
    const [fold, setFold] = useState(false);

    function handleNavFold(){
        setFold(!fold);
    }

    return(
        <Fragment>
            <header id="header">
                <nav className="menu">
                    <Link onClick={handleNavFold} to="">导航</Link>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <Link className="user" to="/login"></Link>
            </header>
            <nav id="menu">
                <NavLink className="iconfont icon-home" to="/">首页</NavLink>
                <NavLink className="iconfont icon-kecheng" to="/course">课程安排</NavLink>
                <NavLink className="iconfont icon-peixunjiangshi" to="/lecturer">讲师团队</NavLink>
            </nav>
            <div id="main" style={{transform : `translateX(${fold?4.5:0}rem)`}}>
                {children}
            </div>
        </Fragment>
    )
}

export default Frame;