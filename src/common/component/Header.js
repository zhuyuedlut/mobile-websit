import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {isLogin, loginOut} from "../../store/action/login";

function Header(props){
    const {handleNavFold, back, path, username, dispatch} = props;
    const [exitBtnShow, setExitBtnShow] = useState(false);

    useEffect(()=>{
        if(!username){
            dispatch(isLogin())
        }
    }, []);

    function handleExitBtnClick(){
        setExitBtnShow(!exitBtnShow);
    }

    return (
        <header id="header">
            <nav className="menu">
                {
                    path === '/login' ?
                        <a className="header-btn-left iconfont icon-back" onClick={back}></a> :
                        <a className="header-btn-left iconfont icon-hycaidan" onClick={handleNavFold}></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {
                username ?
                    <a className="header-btn-right">
                        <span onClick={handleExitBtnClick}>{username}</span>
                        <span className="header-logout-btn" style={{display: exitBtnShow ? 'inline' : 'none'}}
                            onClick={()=>{dispatch(loginOut())}}>退出</span>
                    </a>
                    : <Link className="user" to="/login"></Link>
            }
        </header>
    )
}

export default connect()(Header);
