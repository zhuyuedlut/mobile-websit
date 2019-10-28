import React, {Fragment, useState} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {useBack} from '../../common/hook/index';

function Frame(props){
    const {children, username, location : {pathname : path}, history} = props;
    const back = useBack(history);
    const [fold, setFold] = useState(false);

    function handleNavFold(){
        setFold(!fold);
    }

    return(
        <Fragment>
            <header id="header">
                <nav className="menu">
                    {
                        path === '/login' ?
                            <a className="header-btn-left iconfont icon-back" onClick={back}></a> :
                            <a className="header-btn-left iconfont icon-hycaidan" onClick={handleNavFold}></a>
                    }
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

export default connect((state)=>{
    return {
        username : state.login.name
    }
})(withRouter(Frame));