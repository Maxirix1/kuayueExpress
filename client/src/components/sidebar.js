import React from 'react';
import '../style/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <h1 className='text-3xl mt-10 text-center mb-4'>การจัดการ</h1>
      <ul>
        <li className='active'><Link to="/">หน้าแรก</Link></li>
        <li><Link to="./components/list.js">รายการพัสดุ</Link></li>
        <li><Link to="/">กระจายพัสดุ</Link></li>
        <li><Link to="/">ข้อมูลสาขา</Link></li>
      </ul>
      <div className='m-8'>
        <button className="logout-btn" onClick={toggleSidebar}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Sidebar;
