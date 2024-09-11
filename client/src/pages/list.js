// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Sidebar component with toggle functionality
// function Sidebar({ isOpen, toggleSidebar }) {
//   return (
//     <div className={`w-1/5 bg-[#2a2d39] text-white h-screen p-6 ${isOpen ? 'block' : 'hidden'}`}>
//       {/* Close Button */}
//       <button className="close-btn" onClick={toggleSidebar}>
//         &times;
//       </button>

//       {/* Sidebar Title */}
//       <h1 className="text-3xl mt-10 text-center mb-4">การจัดการ</h1>

//       {/* Sidebar Links */}
//       <ul>
//         <li className="mb-4">
//           <Link to="/" className="hover:text-gray-300">หน้าแรก</Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/list" className="hover:text-gray-300">รายการพัสดุ</Link>
//         </li>
//         <li className="mb-4">
//           <Link to="/" className="hover:text-gray-300">กระจายพัสดุ</Link>
//         </li>
//         <li>
//           <Link to="/" className="hover:text-gray-300">ข้อมูลสาขา</Link>
//         </li>
//       </ul>

//       {/* Logout Button */}
//       <div className="absolute bottom-6 left-6">
//         <button className="text-gray-300 hover:text-white">LOGOUT</button>
//       </div>
//     </div>
//   );
// }

// // Header component
// function Header() {
//   return (
//     <div className="w-full bg-white shadow-md p-6 flex justify-between items-center">
//       <div className="text-gray-700">
//         วันที่ XX/XX/XX <br /> XX:XX
//       </div>
//       <div>
//         <span className="font-bold">{'{ USERNAME }'}</span> | {'{ ตำแหน่ง โคดัง หรือสาขาที่ประจำอยู่ }'}
//       </div>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
//         หน้าแรก
//       </button>
//     </div>
//   );
// }

// // Table component
// function Table() {
//   return (
//     <div className="bg-white shadow-md p-6 mt-4">
//       <h2 className="text-2xl font-bold mb-4">รายการพัสดุ</h2>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border-b px-4 py-2 text-left">ID</th>
//             <th className="border-b px-4 py-2 text-left">ชื่อผู้ส่ง</th>
//             <th className="border-b px-4 py-2 text-left">ประเภท</th>
//             <th className="border-b px-4 py-2 text-left">ราคา</th>
//             <th className="border-b px-4 py-2 text-left">รายละเอียดเพิ่มเติม</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Sample row */}
//           <tr>
//             <td className="border-b px-4 py-2">1</td>
//             <td className="border-b px-4 py-2">Duang Dee</td>
//             <td className="border-b px-4 py-2">Standard</td>
//             <td className="border-b px-4 py-2">$25.00</td>
//             <td className="border-b px-4 py-2">Chowguay</td>
//           </tr>
//           {/* Add more rows here */}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // Homeadmin component with burger menu and toggle functionality
// function Homeadmin() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Burger Icon to toggle sidebar when it's closed */}
//       {!isSidebarOpen && (
//         <div className="burger fixed top-6 left-6 cursor-pointer text-white text-3xl" onClick={toggleSidebar}>
//           ☰
//         </div>
//       )}

//       {/* Main content area */}
//       <div className={`w-4/5 bg-gray-100 ${isSidebarOpen ? 'ml-auto' : ''}`}>
//         {/* Header */}
//         <Header />

//         {/* Table */}
//         <div className="p-6">
//           <Table />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main App component to render Homeadmin
// function App() {
//   return (
//     <Homeadmin />
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/font-style.css';

const InventoryDashboard = () => {
  const [inventoryData] = useState([
    { id: 1, name: 'Item 1', category: 'Category A', price: 100, details: 'Details 1' },
    { id: 2, name: 'Item 2', category: 'Category B', price: 200, details: 'Details 2' },
    { id: 3, name: 'Item 3', category: 'Category A', price: 150, details: 'Details 3' },
  ]);

  const [activePage, setActivePage] = useState('inventory');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

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
    <div style={{ display: 'flex', height: '100vh'}}>
      {/* Sidebar */}
      <aside style={{ 
        width: isMobile ? '100%' : (sidebarOpen ? '250px' : '0'),
        height: isMobile ? '100%' : '100vh',
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
          <Link to="/inventory" style={sidebarLinkStyle('inventory')} onClick={() => { setActivePage('inventory'); isMobile && toggleSidebar(); }}>รายการพัสดุ</Link>
          <Link to="/distribution" style={sidebarLinkStyle('distribution')} onClick={() => { setActivePage('distribution'); isMobile && toggleSidebar(); }}>กระจายพัสดุ</Link>
          <Link to="/branches" style={sidebarLinkStyle('branches')} onClick={() => { setActivePage('branches'); isMobile && toggleSidebar(); }}>ข้อมูลสาขา</Link>
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
      <main style={{ flex: 1, overflow: 'auto', width: '100%' }}>
        <header style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button 
                onClick={toggleSidebar}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  marginRight: '20px'
                }}
              >
                ☰
              </button>
              <h1 style={{ fontSize: '28px', margin: 0 }}>รายการพัสดุ</h1>
            </div>
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button 
                  style={{
                    marginRight: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
                  onClick={() => setActivePage('home')}
                >
                  หน้าแรก
                </button>
                <span style={{ marginRight: '20px' }}>วันที่ {new Date().toLocaleDateString()}</span>
                <span>{'{USERNAME}'} | {'ตำแหน่ง'}</span>
              </div>
            )}
          </div>
        </header>

        <div style={{ padding: '20px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, borderRadius: '10px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f1f1' }}>
                <th style={{...tableHeaderStyle, borderTopLeftRadius: '10px'}}>ID</th>
                <th style={tableHeaderStyle}>ชื่อสิ่งของ</th>
                <th style={tableHeaderStyle}>ประเภท</th>
                <th style={tableHeaderStyle}>ราคา</th>
                <th style={{...tableHeaderStyle, borderTopRightRadius: '10px'}}>รายละเอียดเพิ่มเติม</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={item.id} style={index === inventoryData.length - 1 ? { backgroundColor: '#f9f9f9' } : {}}>
                  <td style={{...tableCellStyle, ...(index === inventoryData.length - 1 ? { borderBottomLeftRadius: '10px' } : {})}}>
                    {item.id}
                  </td>
                  <td style={tableCellStyle}>{item.name}</td>
                  <td style={tableCellStyle}>{item.category}</td>
                  <td style={tableCellStyle}>{item.price}</td>
                  <td style={{...tableCellStyle, ...(index === inventoryData.length - 1 ? { borderBottomRightRadius: '10px' } : {})}}>
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

export default InventoryDashboard;