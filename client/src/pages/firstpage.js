import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">หน้าแรก</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* การ์ดแสดงจำนวนพัสดุทั้งหมด */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">จำนวนพัสดุทั้งหมดที่อยู่ในโกดัง</h3>
        <p className="text-4xl font-bold mt-4">XXX ชิ้น</p>
        <p className="mt-2 text-sm">จำนวนทั้งหมดมาจากข้อมูลพัสดุที่ถูกเพิ่มใหม่</p>
      </div>

      {/* การ์ดแสดงจำนวนพัสดุรวมที่สาขา */}
      <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">จำนวนพัสดุรวมที่สาขา</h3>
        <p className="text-4xl font-bold mt-4">XXX ชิ้น</p>
      </div>

      {/* การ์ดแสดงเครดิตรวม */}
      <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold">เครดิตรวม</h3>
        <p className="text-4xl font-bold mt-4">XXX pt</p>
      </div>
    </div>
  </div>
);

const List = () => <div>รายการพัสดุ</div>;
const Distribution = () => <div>กระจายพัสดุ</div>;
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

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarLinkStyle = (page) => ({
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    backgroundColor: activePage === page ? "#34495e" : "transparent",
    transition: "background-color 0.3s",
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: isMobile ? (sidebarOpen ? "100%" : "0") : "250px",
          height: "100vh",
          backgroundColor: "#2a2d39",
          color: "white",
          padding: sidebarOpen ? "20px" : "0",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s",
          overflow: "hidden",
          position: isMobile ? "fixed" : "relative",
          zIndex: 1000,
          left: isMobile ? (sidebarOpen ? "0" : "-100%") : "0",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "24px" }}>การจัดการ</h2>
          {isMobile && (
            <button
              onClick={toggleSidebar}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          )}
        </div>
        <nav>
          <Link
            to="/homeAdmin/firstpage"
            style={sidebarLinkStyle("firstpage")}
            onClick={() => {
              setActivePage("firstpage");
              isMobile && toggleSidebar();
            }}
          >
            หน้าแรก
          </Link>
          <Link
            to="/homeAdmin/list"
            style={sidebarLinkStyle("list")}
            onClick={() => {
              setActivePage("list");
              isMobile && toggleSidebar();
            }}
          >
            รายการพัสดุ
          </Link>
          <Link
            to="/homeAdmin/distribution"
            style={sidebarLinkStyle("distribution")}
            onClick={() => {
              setActivePage("distribution");
              isMobile && toggleSidebar();
            }}
          >
            กระจายพัสดุ
          </Link>
          <Link
            to="/homeAdmin/data"
            style={sidebarLinkStyle("data")}
            onClick={() => {
              setActivePage("data");
              isMobile && toggleSidebar();
            }}
          >
            ข้อมูลสาขา
          </Link>
        </nav>
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c0392b")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e74c3c")}
        >
          LOGOUT
        </button>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          overflow: "auto",
          padding: "20px",
          marginLeft: isMobile ? "0" : "250px",
          transition: "margin-left 0.3s",
        }}
      >
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <button
                onClick={toggleSidebar}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                ☰
              </button>
            )}
            <h1 style={{ fontSize: "24px", margin: "0" }}>หน้าแรก</h1>
          </div>
          <div>
            <span>วันที่ XX/XX/XX</span> | <span>เวลา XX:XX</span> | <span>{'{USERNAME}'}</span>
          </div>
        </header>

        {activePage === "firstpage" && <Home />}
        {activePage === "list" && <List />}
        {activePage === "distribution" && <Distribution />}
        {activePage === "data" && <Data />}
      </main>
    </div>
  );
};

export default Dashboard;
