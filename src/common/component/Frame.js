import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
function Frame(props){
    const {children} = props;
    return(
        <Fragment>
            <header id="header">
                <nav className="menu">
                    <a>导航</a>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <NavLink className="user" to="/login"></NavLink>
            </header>
            <nav id="menu">
                <NavLink className="iconfont icon-home" to="/">首页</NavLink>
                <NavLink className="iconfont icon-kecheng" to="/course">课程安排</NavLink>
                <NavLink className="iconfont icon-peixunjiangshi" to="/lecturer">讲师团队</NavLink>
            </nav>
            <div id="main">
                {children}
            </div>
        </Fragment>
    )
}

export default Frame;