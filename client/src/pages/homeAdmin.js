import React, { useState } from 'react';
import Sidebar from '../components/sidebar.js';
import Header from '../components/Header.js';
import DestinationFormSection from '../components/DestinationFormSection.js';
import CFSFormSection from '../components/CFSFormSection.js';
import '../style/ariamairu.css';

function Homeadmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      {!isSidebarOpen && (
        <div className="burger" onClick={toggleSidebar}>
          ☰
        </div>
      )}
      <div className={`main-content ${isSidebarOpen ? 'with-sidebar' : ''}`}>
        <Header />

        <div className="form-container">
          <CFSFormSection title="ต้นทาง" color="green" />
          <DestinationFormSection title="ปลายทาง" color="blue" />
        </div>

        {/* Package Information Section */}
        <div className="package-info">
          <h2>ข้อมูลพัสดุ</h2>
          <div className="package-details">
            <div className="input-group">
              <label>ประเภท:</label>
              <select>
                <option>เลือกประเภท</option>
              </select>
            </div>
            <div className="input-group">
              <label>ขนาด (cm):</label>
              <div className="dimensions">
                <input type="text" placeholder="กว้าง" />
                <input type="text" placeholder="ยาว" />
                <input type="text" placeholder="สูง" />
              </div>
            </div>
            <div className="input-group">
              <label>น้ำหนัก (kg):</label>
              <input type="text" placeholder="น้ำหนัก" />
            </div>
            <div className="input-group">
              <label>จำนวน (ชิ้น):</label>
              <input type="text" placeholder="จำนวน" />
            </div>
            <div className="input-group">
              <label>ราคา:</label>
              <input type="text" placeholder="ราคา" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeadmin;

