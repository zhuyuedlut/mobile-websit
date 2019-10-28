import React, {useState} from 'react';
import LoginBox from './Login';
import RegisterBox from './Register';
import '../../common/css/login.css';

function Login(){
    const [rotateDeg, setRotateDeg] = useState(0);
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <div className="box" style={{transform : `rotateY(${rotateDeg}deg)`}}>
                    <LoginBox  setRotateDeg={setRotateDeg} />
                    <RegisterBox setRotateDeg={setRotateDeg} />
                </div>
            </div>
        </div>
    )
}

export default Login;