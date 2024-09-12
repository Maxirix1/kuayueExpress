import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Component for Home page
const Home = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">หน้าแรก</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">จำนวนพัสดุทั้งหมดที่อยู่ในโกดัง</h3>
        <p className="text-4xl font-bold mt-4">XXX ชิ้น</p>
        <p className="mt-2 text-sm">จำนวนทั้งหมดมาจากข้อมูลพัสดุที่ถูกเพิ่มใหม่</p>
      </div>
      <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">จำนวนพัสดุรวมที่สาขา</h3>
        <p className="text-4xl font-bold mt-4">XXX ชิ้น</p>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">เครดิตรวม</h3>
        <p className="text-4xl font-bold mt-4">XXX pt</p>
      </div>
    </div>
  </div>
);

// Component for List page
const List = () => <div>รายการพัสดุ</div>;

// Component for Distribution (กระจายพัสดุ)
const Distribution = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">กระจายพัสดุ</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* ต้นทาง */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">ต้นทาง</h3>
        <label className="block mb-2">สาขา:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="เลือกสาขา" />

        <label className="block mb-2">เบอร์ผู้ส่ง:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="เบอร์ผู้ส่ง" />

        <label className="block mb-2">ชื่อผู้ส่ง:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="ชื่อผู้ส่ง" />

        <label className="block mb-2">หมายเหตุ:</label>
        <textarea className="w-full p-2 border rounded" placeholder="เพิ่มหมายเหตุ"></textarea>
      </div>

      {/* ปลายทาง */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">ปลายทาง</h3>
        <label className="block mb-2">สาขา:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="เลือกสาขา" />

        <label className="block mb-2">เบอร์ผู้รับ:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="เบอร์ผู้รับ" />

        <label className="block mb-2">ชื่อผู้รับ:</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="ชื่อผู้รับ" />

        <label className="block mb-2">หมายเหตุ:</label>
        <textarea className="w-full p-2 border rounded" placeholder="เพิ่มหมายเหตุ"></textarea>
      </div>

      {/* ข้อมูลพัสดุ */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md col-span-2">
        <h3 className="text-xl font-bold mb-4">ข้อมูลพัสดุ</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">ประเภท:</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="เลือกประเภท" />
          </div>
          <div>
            <label className="block mb-2">จำนวน (ชิ้น):</label>
            <input type="number" className="w-full p-2 border rounded" placeholder="จำนวน" />
          </div>
          <div>
            <label className="block mb-2">ขนาด (กว้าง):</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="กว้าง" />
          </div>
          <div>
            <label className="block mb-2">น้ำหนัก (kg):</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="น้ำหนัก" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component for Data page
const Data = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">ข้อมูลสาขา</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2 bg-gray-100">รหัสสาขา</th>
          <th className="border p-2 bg-gray-100">ชื่อสาขา</th>
          <th className="border p-2 bg-gray-100">ที่อยู่</th>
          <th className="border p-2 bg-gray-100">เบอร์โทร</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">001</td>
          <td className="border p-2">สาขากรุงเทพ</td>
          <td className="border p-2">123 ถนนสุขุมวิท</td>
          <td className="border p-2">02-1234567</td>
        </tr>
        <tr>
          <td className="border p-2">002</td>
          <td className="border p-2">สาขาเชียงใหม่</td>
          <td className="border p-2">456 ถนนนิมมาน</td>
          <td className="border p-2">053-987654</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// Main Dashboard component
const Dashboard = () => {
  const [activePage, setActivePage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
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
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        style={{
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
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}
        >
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
          <Link
            to="/homeAdmin/firstpage"
            style={sidebarLinkStyle('home')}
            onClick={() => {
              setActivePage('home');
              isMobile && toggleSidebar();
            }}
          >
            หน้าแรก
          </Link>
          <Link
            to="/homeAdmin/list"
            style={sidebarLinkStyle('inventory')}
            onClick={() => {
              setActivePage('inventory');
              isMobile && toggleSidebar();
            }}
          >
            รายการพัสดุ
          </Link>
          <Link
            to="/homeAdmin/distribution"
            style={sidebarLinkStyle('distribution')}
            onClick={() => {
              setActivePage('distribution');
              isMobile && toggleSidebar();
            }}
          >
            กระจายพัสดุ
          </Link>
          <Link
            to="/homeAdmin/data"
            style={sidebarLinkStyle('branches')}
            onClick={() => {
              setActivePage('branches');
              isMobile && toggleSidebar();
            }}
          >
            ข้อมูลสาขา
          </Link>
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
          onMouseOver={(e) => (e.target.style.backgroundColor = '#c0392b')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#e74c3c')}
          onClick={() => console.log('Logout')}
        >
          LOGOUT
        </button>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isMobile ? "mr-10" : "mr-64"} p-4`}>
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {isMobile && (
              <button onClick={toggleSidebar} className="text-2xl focus:outline-none mr-4">
                ☰
              </button>
            )}
            <h1 className="text-2xl font-bold">หน้าแรก</h1>
          </div>
          <div>
            <span>วันที่ {new Date().toLocaleDateString("th-TH")}</span> | <span>เวลา {new Date().toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" })}</span> | <span>{'{USERNAME}'}</span>
          </div>
        </header>

        {/* Dynamic content */}
        {location.pathname === "/homeAdmin/firstpage" && <Home />}
        {location.pathname === "/homeAdmin/list" && <List />}
        {location.pathname === "/homeAdmin/distribution" && <Distribution />}
        {location.pathname === "/homeAdmin/data" && <Data />}
      </main>
    </div>
  );
};

export default Dashboard;
