import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav id="menu">
            <NavLink className="iconfont icon-home" to="/">首页</NavLink>
            <NavLink className="iconfont icon-kecheng" to="/course">课程安排</NavLink>
            <NavLink className="iconfont icon-peixunjiangshi" to="/lecturer">讲师团队</NavLink>
        </nav>
    )
}
export default Menu;
