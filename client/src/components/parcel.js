import React, { useState } from "react";
// import axios from "axios";

const Parcel = ({ onDetailsChange }) => {
  // const [parcels, setParcels] = useState([]);
  const [detailsData, setDetailsData] = useState({
    typeParcel: "",
    width: "",
    height: "",
    lenght: "",
    weight: "",
    amount: "",
    price: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetailsData((prevData) => ({ ...prevData, [name]: value }));
    onDetailsChange({ ...detailsData, [name]: value });
  };

  // useEffect(() => {
  //   const fetchParcels = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/parcels");
  //       setParcels(response.data);
  //     } catch (error) {
  //       console.error("Error fetch Data:", error);
  //     }
  //   };
  //   fetchParcels();
  // }, []);

  return (
    <div>
      <div
        id="admin-lao"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={gradientHeaderStyle("#0031e0", "#0ad5f5")}>
          <h2 style={{ margin: 0, color: "white" }}>ข้อมูลพัสดุ</h2>
        </div>
        <div style={bodyStyle}>
          <div
            style={{
              display: "grid",
              gap: "15px",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div>
              <label style={labelStyle}>ประเภท :</label>
              <select
                style={inputStyle}
                onChange={handleInputChange}
                value={detailsData.typeParcel}
                name="typeParcel"
              >
                <option value="" disabled>
                  เลือกประเภท
                </option>
                <option value="O"> O </option>
                <option value="A"> A </option>
                <option value="2A"> 2A</option>
                <option value="B"> B</option>
                <option value="C"> C</option>
                <option value="D"> D</option>
                <option value="E"> E</option>
                <option value="F"> F</option>
                <option value="G"> G</option>
                <option value="H"> H</option>
                <option value="I"> I</option>
                <option value="Genaral"> เครื่องใช้ทั่วไป</option>
                <option value="Electrical"> เครื่องใช้ไฟฟ้า</option>
                <option value="Big But Light"> เครื่องใหญ่น้ำหนักเบา</option>
                <option value="Lots of Weight"> น้ำหนักเยอะ</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>ขนาด(cm) :</label>
              <div style={{ display: "flex", gap: "5px" }}>
                <input
                  name="width"
                  type="number"
                  onChange={handleInputChange}
                  value={detailsData.width}
                  placeholder="กว้าง"
                  style={{ ...inputStyle, flex: 1 }}
                />
                <input
                  name="lenght"
                  type="number"
                  onChange={handleInputChange}
                  value={detailsData.lenght}
                  placeholder="ยาว"
                  style={{ ...inputStyle, flex: 1 }}
                />
                <input
                  name="height"
                  type="number"
                  onChange={handleInputChange}
                  value={detailsData.height}
                  placeholder="สูง"
                  style={{ ...inputStyle, flex: 1 }}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>น้ำหนัก(kg) :</label>
              <input
                name="weight"
                type="number"
                onChange={handleInputChange}
                value={detailsData.weight}
                placeholder="น้ำหนัก"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>จำนวน :</label>
              <input
                name="amount"
                type="number"
                onChange={handleInputChange}
                value={detailsData.amount}
                placeholder="จำนวน(ชิ้น)"
                style={inputStyle}
              />
            </div>
            {/* <div>
              <label style={labelStyle}>ราคา :</label>
              <input
                name="price"
                type="number"
                onChange={handleInputChange}
                value={detailsData.price}
                placeholder="ราคา"
                style={inputStyle}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* <table className="mt-6 w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-blue-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID PARCEL
            </th>
            <th scope="col" className="px-6 py-3">
              FROM
            </th>
            <th scope="col" className="px-6 py-3">
              TO
            </th>
          </tr>
        </thead>
        <tbody>
          {parcels.length > 0 ? (
            parcels.map((parcel) => (
              <tr className="bg-white border-b" key={parcel._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {parcel.id_parcel}
                </td>
                <td className="px-6 py-4 text-gray-900">{parcel.from}</td>
                <td className="px-6 py-4 text-gray-900">{parcel.to}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="px-6 py-4 text-center">
                No parcels found.
              </td>
            </tr>
          )}
        </tbody>
      </table> */}

      {/* <div className="flex align-center justify-center mt-4">
        <button
          type="button"
          className="text-lg font-medium px-14 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Send
        </button>
      </div> */}
    </div>
  );
};

const gradientHeaderStyle = (color1, color2) => ({
  background: `linear-gradient(to right, ${color1}, ${color2})`,
  padding: "15px 20px",
  borderRadius: "20px 20px 0 0",
  color: "white",
});

const bodyStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

export default Parcel;
