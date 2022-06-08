import React from "react";

const LoginFormTemplate = () => {
    return (
        <form id="loginForm" method="post">
            <input className="id" type="input" name="id" placeholder="아이디"></input>
            <input className="pw" type="password" name="pw" placeholder="비밀번호"></input>
            <div className="btns">
                <input className="login" type="submit" value="로그인"></input>
                <input className="join" type="button" value="회원가입"></input>
            </div>
        </form>
    );
};

export default LoginFormTemplate;