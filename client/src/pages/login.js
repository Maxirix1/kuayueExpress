import React from "react";
import Logo from "../assets/logo.png";
import '../style/login.css';

function Login() {
  return (
  <div>
            <header className="headerLogin">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <ul>
                    <li>
                        <a href="/">| Home</a>
                    </li> 
                    <li>
                        <a href="/" >| About</a>
                    </li> 
                    <li>
                        <a href="/">| ติดตามพัสดุ</a>
                    </li> 
                    <li>
                        <a href="/">| คำนวณค่าขนส่ง</a>
                    </li>
                </ul>
            </nav>
        </header>

        <div className="contentLogin">
          <h1>Login</h1>
          <form>
              <input placeholder="username"/>
              <input placeholder="email address"/>
              <input placeholder="password"/>
              <input placeholder="confirm password"/>
          </form>
        </div>
  </div>
  );
}

export default Login;
