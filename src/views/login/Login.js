import React from 'react';

function LoginBox(props){
    const {setRotateDeg} = props;
    console.log("LoginBox");
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require('../../common/images/user_img.png')}  />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text" name="username" placeholder="用户名" />
                </p>
                <p>
                    <input type="password" name="userpassword" placeholder="请输入密码" />
                </p>
                <p className="mima clearfix">
                        <span>
                            <input id="rem" type="checkbox" name="remember" />
                            <label htmlFor="rem"></label>记住密码
                        </span>
                    <a href="#">忘记密码？</a>
                </p>
                <button className="form_btn">登录</button>
                <p className="form_tip">没有帐号？<a onClick={()=>{setRotateDeg(180)}} href="#">立即注册</a></p>
            </div>
        </div>
    )
}

export default LoginBox;