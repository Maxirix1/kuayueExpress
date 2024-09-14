import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/font-style.css';

const  DistributionDashboard = () => {
  const [inventoryData] = useState([
    { id: 1, name: 'chowguy', category: 'Food', price: 100, details: 'Chowguy duangdee' },
    { id: 2, name: 'Item 2', category: 'Category B', price: 200, details: 'Details 2' },
    { id: 3, name: 'Item 3', category: 'Category A', price: 150, details: 'Details 3' },
  ]);

  const [activePage, setActivePage] = useState('distribution');
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
          <Link to="/homeAdmin" style={sidebarLinkStyle('inventorystatistics')} onClick={() => { setActivePage('inventorystatistics'); isMobile && toggleSidebar(); }}>หน้าแรก</Link>
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
            <h1 style={{ fontSize: '24px', margin: '0' }}>การกระจายพัสดุ</h1>
          </div>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '20px' }}>วันที่ {new Date().toLocaleDateString('th-TH')}</span>
              <span style={{ marginRight: '20px' }}>{new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</span>
              <span>{'{ USERNAME }'} | {'{ ตำแหน่ง โกดัง หรือสาขาที่ประจำอยู่ }'}</span>
              <Link
              to="/"
              style={{
              marginLeft: '20px',
              padding: '8px 16px',
              backgroundColor: '#4a69bd',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              textDecoration: 'none',
              cursor: 'pointer',
              }}
            >
              หน้าเเรก
                </Link>
            </div>
          )}
        </header>

        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          {/* Origin Section */}
          <div style={{ flex: 1, minWidth: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={gradientHeaderStyle('#4CAF50', '#45a049')}>
              <h2 style={{ margin: 0, color: 'white' }}>ต้นทาง</h2>
            </div>
            <div style={bodyStyle}>
              <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle}>สาขา :</label>
                <input type="text" value="{ โกดัง หรือสาขาที่ประจำอยู่ }" readOnly style={inputStyle} />
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>เบอร์ผู้ส่ง :</label>
                  <div style={{ display: 'flex' }}>
                    <select style={{ ...inputStyle, width: '80px', borderRadius: '5px 0 0 5px' }}>
                      <option>+66</option>
                    </select>
                    <input type="tel" placeholder="XX-XXX-XXXX" style={{ ...inputStyle, flex: 1, borderRadius: '0 5px 5px 0' }} />
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle}>ชื่อผู้ส่ง :</label>
                <input type="text" placeholder="Name Lastname" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{"margin-right": '5px'}} /> เร่งด่วน
                </label>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{"margin-right": '5px'}} /> รับที่โกดัง
                </label>
              </div>
              <div>
                <label style={labelStyle}>หมายเหตุ :</label>
                <textarea placeholder="เพิ่มหมายเหตุ" style={{ ...inputStyle, height: '80px' }}></textarea>
              </div>
            </div>
          </div>

          {/* Destination Section */}
          <div style={{ flex: 1, minWidth: '300px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={gradientHeaderStyle('#3498db', '#2980b9')}>
              <h2 style={{ margin: 0, color: 'white' }}>ปลายทาง</h2>
            </div>
            <div style={bodyStyle}>
              <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle}>สาขา :</label>
                <select style={inputStyle}>
                  <option>เลือกสาขา</option>
                </select>
              </div>
              <div style={{ marginBottom: '10px', display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>เบอร์ผู้รับ :</label>
                  <div style={{ display: 'flex' }}>
                    <select style={{ ...inputStyle, width: '80px', borderRadius: '5px 0 0 5px' }}>
                      <option>+66</option>
                    </select>
                    <input type="tel" placeholder="XX-XXX-XXXX" style={{ ...inputStyle, flex: 1, borderRadius: '0 5px 5px 0' }} />
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={labelStyle}>ชื่อผู้รับ :</label>
                <input type="text" placeholder="Name Lastname" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{"margin-right": '5px'}} /> รับที่สาขา
                </label>
              </div>
              <div>
                <label style={labelStyle}>หมายเหตุ :</label>
                <textarea placeholder="เพิ่มหมายเหตุ" style={{ ...inputStyle, height: '80px' }}></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Item Details Section */}
        <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <div style={gradientHeaderStyle('#f1c40f', '#f39c12')}>
            <h2 style={{ margin: 0, color: 'white'}}>ข้อมูลพัสดุ</h2>
          </div>
          <div style={bodyStyle}>
            <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div>
                <label style={labelStyle}>ประเภท :</label>
                <select style={inputStyle}>
                  <option>เลือกประเภท</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>ขนาด(cm) :</label>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <input type="number" placeholder="กว้าง" style={{ ...inputStyle, flex: 1 }} />
                  <input type="number" placeholder="ยาว" style={{ ...inputStyle, flex: 1 }} />
                  <input type="number" placeholder="สูง" style={{ ...inputStyle, flex: 1 }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>น้ำหนัก(kg) :</label>
                <input type="number" placeholder="น้ำหนัก" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>จำนวน :</label>
                <input type="number" placeholder="จำนวน(ชิ้น)" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>ราคา :</label>
                <input type="number" placeholder="ราคา" style={inputStyle} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

const gradientHeaderStyle = (color1, color2) => ({
  background: `linear-gradient(to right, ${color1}, ${color2})`,
  padding: '15px 20px',
  'border-radius': '20px 20px 0 0', 
  color: 'white',
});

const bodyStyle = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

export default DistributionDashboard;