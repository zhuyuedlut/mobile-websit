import React from 'react';

function RegisterBox(props){
    const {setRotateDeg} = props;
    console.log("RegisterBox");
    return(
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
                <p>
                    <input type="text" placeholder="用户名" />
                </p>
                <p>
                    <input type="password" placeholder="设置密码" />
                </p>
                <p>
                    <input type="password" placeholder="确定密码" />
                </p>
                <p>
                    <input type="text" placeholder="学习宣言" />
                </p>
                <button className="form_btn">马上注册</button>
                <p className="form_tip">已有帐号？<a onClick={()=>{setRotateDeg(0)}} href="#">立即登录</a></p>
            </div>
        </div>
    )
}

export default RegisterBox;