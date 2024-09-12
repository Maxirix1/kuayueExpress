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
      <h1 className='text-2xl mt-2 mb-4'>การจัดการ</h1>
      <ul>
        <li><Link to="/homeAdmin">หน้าแรก</Link></li>
        <li className='pl-2'><Link to="/homeAdmin/list">รายการพัสดุ</Link></li>
        <li  className='active'><Link to="/homeAdmin/distribution">กระจายพัสดุ</Link></li>
        <li><Link to="/homeAdmin/data">ข้อมูลสาขา</Link></li>
      </ul>
      <div className='m-8'>
        <button className="logout-btn" onClick={toggleSidebar}>LOGOUT</button>
      </div>
    </div>
  );
}

export default Sidebar;
