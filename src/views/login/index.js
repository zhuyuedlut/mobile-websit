import React, {useState, useEffect} from 'react';
import LoginBox from './Login';
import RegisterBox from './Register';
import '../../common/css/login.css';

function Login(){
    const [status, setStatus] = useState('login');
    console.log("login");
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <div className="box">
                    <LoginBox  setStatus={setStatus}  status={status} />
                    <RegisterBox setStatus={setStatus} status={status} />
                </div>
            </div>
        </div>
    )
}

export default Login;