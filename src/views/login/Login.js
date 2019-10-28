import React, {useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {login} from '../../store/action/login';
import {useBack} from "../../common/hook";

function LoginBox(props){
    const {setRotateDeg, dispatch, history} = props;
    const back = useBack(history);
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationCodeSrc, setVerificationCodeSrc] = useState('/miaov/user/verify?' + Date.now());
    const [showVerificationCode, setShowVerificationCode] = useState(false);

    function handleUserNameChange({target: {value}}){
        setUserName(value);
    }

    function handlePassWordChange({target: {value}}){
        setPassWord(value);
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

    function handleLoginBtn(){
        dispatch(login({username, password, verify : verificationCode})).then((e)=>{
            if(e.code === 0){
                alert("登录成功");
                back();
            }else{
                alert(`登录失败 ${e.msg}`);
                updateVerificationCodeSrc();
            }
        }, (error)=>{
            console.error(error);
        })
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require('../../common/images/user_img.png')}  alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text" name="username" onChange={handleUserNameChange} placeholder="用户名" />
                </p>
                <p>
                    <input type="password" name="userpassword" onChange={handlePassWordChange} placeholder="请输入密码" />
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
                <button className="form_btn" onClick={handleLoginBtn}>登录</button>
                <p className="form_tip">没有帐号？<a onClick={()=>{setRotateDeg(180)}} href="#">立即注册</a></p>
            </div>
        </div>
    )
}

export default connect((state)=>{
   return {
       dispatch : state.dispatch
   }
})(withRouter(LoginBox));