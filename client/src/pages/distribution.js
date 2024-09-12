import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/font-style.css';

const  Distribution = () => {
  const [inventoryData] = useState([
    { id: 1, name: 'chowguy', category: 'Food', price: 100, details: 'Chowguy duangdee' },
    { id: 2, name: 'Item 2', category: 'Category B', price: 200, details: 'Details 2' },
    { id: 3, name: 'Item 3', category: 'Category A', price: 150, details: 'Details 3' },
  ]);

  const [activePage, setActivePage] = useState('inventory');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarLinkStyle = (page) => ({
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '5px',
    paddingRight: '10px',
    backgroundColor: activePage === page ? '#34495e' : 'transparent',
    transition: 'background-color 0.3s',
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: isMobile ? (sidebarOpen ? '100%' : '0') : '250px',
        height: '100vh',
        backgroundColor: '#2a2d39',
        color: 'white',
        padding: sidebarOpen ? '20px' : '0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        overflow: 'hidden',
        position: isMobile ? 'fixed' : 'relative',
        zIndex: 1000,
        left: isMobile ? (sidebarOpen ? '0' : '-100%') : '0',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', margin: 0 }}>การจัดการ</h2>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          )}
        </div>
        <nav style={{ flex: 1 }}>
          <Link to="/" style={sidebarLinkStyle('home')} onClick={() => { setActivePage('home'); isMobile && toggleSidebar(); }}>หน้าแรก</Link>
          <Link to="/homeAdmin/list" style={sidebarLinkStyle('inventory')} onClick={() => { setActivePage('inventory'); isMobile && toggleSidebar(); }}>รายการพัสดุ</Link>
          <Link to="/homeAdmin/distribution" style={sidebarLinkStyle('distribution')} onClick={() => { setActivePage('distribution'); isMobile && toggleSidebar(); }}>กระจายพัสดุ</Link>
          <Link to="/homeAdmin/data" style={sidebarLinkStyle('branches')} onClick={() => { setActivePage('branches'); isMobile && toggleSidebar(); }}>ข้อมูลสาขา</Link>
        </nav>
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
          onClick={() => console.log('Logout')}
        >
          LOGOUT
        </button>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <button
                onClick={toggleSidebar}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                ☰
              </button>
            )}
            <h1 style={{ fontSize: '24px', margin: '0' }}>รายการพัสดุ</h1>
          </div>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '20px' }}>วันที่ {new Date().toLocaleDateString('th-TH')}</span>
              <span style={{ marginRight: '20px' }}>{new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
              <span>{'{ USERNAME }'} | {'{ ตำแหน่ง โกดัง หรือสาขาที่ประจำอยู่ }'}</span>
              <button
                style={{
                  marginLeft: '20px',
                  padding: '8px 16px',
                  backgroundColor: '#4a69bd',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                หน้าแรก
              </button>
            </div>
          )}
        </header>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '10px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f1f1' }}>
                <th style={{ ...tableHeaderStyle, borderTopLeftRadius: '10px' }}>ID</th>
                <th style={tableHeaderStyle}>ชื่อสิ่งของ</th>
                <th style={tableHeaderStyle}>ประเภท</th>
                <th style={tableHeaderStyle}>ราคา</th>
                <th style={{ ...tableHeaderStyle, borderTopRightRadius: '10px' }}>รายละเอียดเพิ่มเติม</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={item.id} style={index === inventoryData.length - 1 ? { backgroundColor: '#f9f9f9' } : {}}>
                  <td style={{ ...tableCellStyle, ...(index === inventoryData.length - 1 ? { borderBottomLeftRadius: '10px' } : {}) }}>
                    {item.id}
                  </td>
                  <td style={tableCellStyle}>{item.name}</td>
                  <td style={tableCellStyle}>{item.category}</td>
                  <td style={tableCellStyle}>{item.price}</td>
                  <td style={{ ...tableCellStyle, ...(index === inventoryData.length - 1 ? { borderBottomRightRadius: '10px' } : {}) }}>
                    {item.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ddd'
};

const tableCellStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd'
};

export default Distribution;