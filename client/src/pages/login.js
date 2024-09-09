import React from "react";
import Logo from "../assets/logo.png";
import '../style/login.css';
import { Link } from "react-router-dom";

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
    <div className="containerLogin">
        <div className="contentLogin">
          <h1>LOGIN</h1>
          <form>
              <input placeholder="email address"/>
              <input  type="password" placeholder="password"/>
              <button className="Button">LOGIN</button>
          </form>
              <p>ยังไม่มีบัญชีใช่มั้ย? <Link href="#">สมัครสมาชิค</Link> เลย!</p>
        </div>
    </div>
    <footer>
        <div className="logo">
            <img src={Logo} alt="logo"/>
        </div>
        <div className="navfooter">
        <ul>
                    <li>
                        <a href="/">| Home</a>
                    </li> 
                    <li>
                        <a href="/">| About</a>
                    </li> 
                    <li>
                        <a href="/">| ติดตามพัสดุ</a>
                    </li> 
                    <li>
                        <a href="/">| คำนวณค่าขนส่ง</a>
                    </li>
                </ul>
        </div>
        <h1 className="Contact">Contact</h1>
    </footer>
  </div>
  );
}

export default Login;
