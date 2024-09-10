import React from "react";
import Logo from "../assets/logo.png";
import '../style/login.css';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <header className="headerLogin">
        <nav>
          <div className="logo">
            <img src={Logo} alt="logo" />
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

      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-5xl font-bold leading-tight tracking-tight text-[#b23cca] md:text-4xl ">
                SIGN-UP
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Your username</label>
                  <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter username" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter email address" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                </div>
                <button type="submit" className="w-full text-white bg-[#b111d1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                <p className="text-center text-sm font-light text-gray-500 ">
                  มีบัญชีแล้วใช่ไหม? <Link to="/login" className="font-medium text-[#b111d1] hover:underline ">เข้าสู่ระบบ</Link> เลย!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
