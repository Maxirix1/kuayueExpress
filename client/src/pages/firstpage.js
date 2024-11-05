import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "../style/font-style.css";
import axios from "axios";

const InventoryStatistics = () => {
  const navigate = useNavigate();
  const { username, role } = useAuth();
  const [totalParcels, setTotalParcels] = useState([]);

  useEffect(() => {
    const countParcels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parcels/count");
        setTotalParcels(response.data.total);
      }catch (error) {
        console.log("ERROR Count parcels | Try again");
      }
    }
    countParcels();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (!token) {
      navigate("/login");
    } else if (storedRole !== "admin") {
      navigate("/forbidden");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // const handleLogout = useState();

  const [inventoryData] = useState([
    {
      id: 1,
      name: "chowguy",
      category: "Food",
      price: 100,
      details: "Chowguy duangdee",
    },
    {
      id: 2,
      name: "Item 2",
      category: "Category B",
      price: 200,
      details: "Details 2",
    },
    {
      id: 3,
      name: "Item 3",
      category: "Category A",
      price: 150,
      details: "Details 3",
    },
  ]);

  const [activePage, setActivePage] = useState("inventorystatistics");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinkStyle = (page) => ({
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    paddingRight: "10px",
    backgroundColor: activePage === page ? "#34495e" : "transparent",
    transition: "background-color 0.3s",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "24px", margin: 0 }}>การจัดการ</h2>
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
        <nav style={{ flex: 1 }}>
          <Link
            to="/homeAdmin/main"
            style={sidebarLinkStyle("inventorystatistics")}
            onClick={() => {
              setActivePage("inventorystatistics");
              isMobile && toggleSidebar();
            }}
          >
            หน้าแรก
          </Link>
          <Link
            to="/homeAdmin/list"
            style={sidebarLinkStyle("inventory")}
            onClick={() => {
              setActivePage("inventory");
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
            to="/homeAdmin/branch"
            style={sidebarLinkStyle("branches")}
            onClick={() => {
              setActivePage("branches");
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
          onClick={handleLogout}
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
          transition: "margin-left 0.3s",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
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
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "20px" }}>
                {new Date().toLocaleDateString("th-TH")}
              </span>
              <span style={{ marginRight: "20px" }}>
                {new Date().toLocaleTimeString("th-TH", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>
                {username} | {role}
              </span>
              <Link
                to="/"
                style={{
                  marginLeft: "20px",
                  padding: "8px 16px",
                  backgroundColor: "#4a69bd",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                หน้าเเรก
              </Link>
            </div>
          )}
        </header>

        <div style={{ overflowX: "auto" }}>
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Total Inventory Card */}
              <div
                style={{
                  ...cardStyle,
                  background: "linear-gradient(135deg, #6d03aa, #4596fc)",
                  minHeight: "150px",
                }}
              >
                <div>
                  <h2 style={titleStyle}>จำนวนพัสดุทั้งหมด</h2>
                  <h2 style={titleStyle}>ที่อยู่ในโกดัง</h2>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "end",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <div style={valueContainerStyle}>
                    <span style={valueStyle} className="font-semibold" >{totalParcels}</span>
                    <span style={unitStyle}>ชิ้น</span>
                  </div>
                  <p style={noteStyle}>
                    จำนวนทั้งหมดนับจากข้อมูลพัสดุที่ถูกเพิ่ม
                  </p>
                </div>
              </div>

              {/* Branch Inventory Card */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
                    flex: 1,
                    minWidth: "200px",
                  }}
                >
                  <h2 style={textStyle}>จำนวนพัสดุรวมที่สาขา</h2>
                  <div style={valueContainerStyle}>
                    <span style={valueStyle}>xxx</span>
                    <span style={unitStyle}>ชิ้น</span>
                  </div>
                </div>

                {/* Total Credit Card */}
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #11998e, #38ef7d)",
                    flex: 1,
                    minWidth: "200px",
                  }}
                >
                  <h2 style={titleStyle}>เครดิตรวม</h2>
                  <div style={valueContainerStyle}>
                    <span style={valueStyle}>xxx</span>
                    <span style={unitStyle}>pt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr
            style={{
              margin: "40px 0",
              borderTop: "2px solid #ddd",
              opacity: 0.5,
            }}
          />

          <div>
            <h2>ข้อมูลพัสดุ</h2>
            {/* Data Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Arial, sans-serif",
              }}
            >
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>#</th>
                  <th style={tableHeaderStyle}>ชื่อพัสดุ</th>
                  <th style={tableHeaderStyle}>ประเภท</th>
                  <th style={tableHeaderStyle}>ราคา</th>
                  <th style={tableHeaderStyle}>รายละเอียด</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id}>
                    <td style={tableCellStyle}>{item.id}</td>
                    <td style={tableCellStyle}>{item.name}</td>
                    <td style={tableCellStyle}>{item.category}</td>
                    <td style={tableCellStyle}>{item.price}</td>
                    <td style={tableCellStyle}>{item.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// Styles
const cardStyle = {
  padding: "20px",
  borderRadius: "10px",
  color: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  // marginBottom: "10px",
};
const textStyle = {
  fontSize: "18px",
  fontWeight: "500",
};

const valueContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const valueStyle = { fontSize: "38px", fontWeight: "semibold" };

const unitStyle = { fontSize: "24px" };

const noteStyle = { fontSize: "12px", fontStyle: "italic", marginTop: "10px" };

const tableHeaderStyle = {
  padding: "10px",
  borderBottom: "2px solid #ddd",
  textAlign: "left",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

export default InventoryStatistics;
