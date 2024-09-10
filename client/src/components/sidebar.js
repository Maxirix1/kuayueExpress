import React from 'react';
import '../style/Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Close Button */}
      <div className="close-btn" onClick={toggleSidebar}>
        &times;
      </div>
      <h2>การจัดการ</h2>
      <ul>
        <li>หน้าแรก</li>
        <li>รายการพัสดุ</li>
        <li>กระจายพัสดุ</li>
        <li>ข้อมูลสาขา</li>
      </ul>
      <button className="logout-btn">LOGOUT</button>
    </div>
  );
}

export default Sidebar;
