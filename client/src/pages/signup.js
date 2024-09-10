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

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-5xl font-bold leading-tight tracking-tight text-[#b111d1] md:text-4xl dark:text-white">
                SIGN-UP
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                {/* <div className="flex items-center justify-between">
      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
    </div> */}
                <button type="submit" className="w-full text-white bg-[#b111d1] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                  มีบัญชีแล้วใช่ไหม? <Link to="/login" className="font-medium text-[#b111d1] hover:underline dark:text-primary-500">เข้าสู่ระบบ</Link> เลย!
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
