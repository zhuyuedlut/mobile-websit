import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {register} from "../../store/action/login";

function RegisterBox(props){
    const {setRotateDeg, dispatch} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationCodeSrc, setVerificationCodeSrc] = useState('/miaov/user/verify?' + Date.now());
    const [showVerificationCode, setShowVerificationCode] = useState(false);

    function handleUsernameChange({target: {value}}){
        setUsername(value);
    }

    function handlePasswordChange({target : {value}}){
        setPassword(value)
    }

    function handleConfirmPassword({target : {value}}){
        setConfirmPassword(value);
    }

    function handleVerificationCodeChange({target : {value}}){
        setVerificationCode(value);
    }

    function handleVerificationCodeFocus(){
        setShowVerificationCode(true);
    }

    function updateVerificationCodeSrc(){
        setVerificationCodeSrc('/miaov/user/verify?' + Date.now());
    }

    function toRegister(){
        dispatch(register({username, password, repassword : confirmPassword, verify : verificationCode}))
            .then((data)=>{
                if(data.code === 0){
                    alert("注册成功, 请登录");
                    setRotateDeg(0);
                }else{
                    updateVerificationCodeSrc();
                }
            }, (e)=>{
                console.error(e);
                alert("注册失败");
            })
    }

    return(
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
                <p>
                    <input type="text" placeholder="用户名" onChange={handleUsernameChange} />
                </p>
                <p>
                    <input type="password" placeholder="设置密码" onChange={handlePasswordChange} />
                </p>
                <p>
                    <input type="password" placeholder="确定密码" onChange={handleConfirmPassword} />
                </p>
                <p className='clearfix'>
                    <input style={{width:'3.1rem', float : 'left'}} type="text"
                           onChange={handleVerificationCodeChange} onFocus={handleVerificationCodeFocus}
                           placeholder="验证码" />
                    {
                        showVerificationCode ?
                            <img style={{width : '3.6rem', float : 'left', height: '0.97333333rem'}} src={verificationCodeSrc}
                                 onClick={updateVerificationCodeSrc} alt="" /> : ''
                    }
                </p>
                <button className="form_btn" onClick={toRegister}>马上注册</button>
                <p className="form_tip">已有帐号？<a onClick={()=>{setRotateDeg(0)}} href="#">立即登录</a></p>
            </div>
        </div>
    )
}

export default connect((state)=>{
    return {
        dispatch : state.dispatch
    }
})(withRouter(RegisterBox));