import React, {Fragment, useState} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {useBack} from '../../common/hook/index';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';

function Frame(props){
    const {children, username, location : {pathname : path}, history} = props;
    const back = useBack(history);
    const [fold, setFold] = useState(false);
    function handleNavFold(){
        setFold(!fold);
    }

    return(
        <Fragment>
            <Header handleNavFold={handleNavFold} back={back} path={path} username={username} />
            <Menu />
            <Main fold={fold} children={children} />
        </Fragment>
    )
}

export default connect((state)=>{
    return {
        username : state.login.username
    }
})(withRouter(Frame));
