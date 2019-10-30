import React, {Fragment, useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {useBack} from '../../common/hook/index';
import Header from './Header';
import Menu from './Menu';

function Frame(props){
    const {children, username, location : {pathname : path}, history} = props;
    const back = useBack(history);
    const [fold, setFold] = useState(false);
    function handleNavFold(){setFold(!fold);}
    return(
        <Fragment>
            <Header handleNavFold={handleNavFold} back={back} path={path} username={username} />
            <Menu />
            <div id="main" style={{transform : `translateX(${fold ? 4.5 : 0}rem)`}}>
                {children}
            </div>
        </Fragment>
    )
}

export default connect((state)=>{
    return {
        username : state.login.username
    }
})(withRouter(Frame));
