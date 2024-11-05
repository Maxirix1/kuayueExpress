import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import "../style/font-style.css";

const Spread = () => {
  const { branch } = useAuth();
  const [parcels, setParcels] = useState([]);
  const [totalParcels, setTotalParcels] = useState([]);

  useEffect(() => {
    const fetchParcelsCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/parcels/count"
        );
        setTotalParcels(response.data.total);
      } catch (error) {
        console.log("ERROR Fetch count data", error);
      }
    };
    fetchParcelsCount();
  }, []);

  const [formID, setFormID] = useState({
    id_parcel: "",
    from: "",
  });

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/parcels");
        setParcels(response.data);
      } catch (error) {
        console.error("Error fetch Data:", error);
      }
    };
    fetchParcels();
  }, []);

  // ตั้งค่า branch ให้กับ formID เมื่อ branch มีค่า
  useEffect(() => {
    if (branch) {
      setFormID((prevFormID) => ({ ...prevFormID, from: branch }));
    }
  }, [branch]);

  // ฟังก์ชันจัดการการเปลี่ยนแปลง input
  const handleChangeID = (e) => {
    setFormID({ ...formID, [e.target.id]: e.target.value });
  };

  // ฟังก์ชันสำหรับการบันทึกข้อมูลพัสดุ
  const handleSubmitID = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/parcel",
        formID
      );
      console.log(response.data);
      setFormID({ id_parcel: "" }); // ล้างฟอร์มหลังบันทึกสำเร็จ
      window.location.reload();
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data");
    }
  };

  return (
    <div>
      <h1>Total Parcels: {totalParcels}</h1>
      <div className="bg-[#732dcf] px-6 py-4 pb-6 rounded-lg">
        <label className="text-white font-semibold">
          Enter the parcel number.
        </label>
        <form className="flex mt-2 gap-2" onSubmit={handleSubmitID}>
          <input
            type="text"
            onChange={handleChangeID}
            value={formID.id_parcel}
            name="parcel"
            id="id_parcel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Number Parcel."
          />
          {/* Hidden field สำหรับค่า branch */}
          <input
            hidden
            value={formID.from}
            name="from"
            onChange={handleChangeID}
            readOnly
          />
          <button
            type="submit"
            className="bg-white rounded-lg px-4 text-[#732dcf] font-semibold text-md duration-200 hover:px-6 hover:duration-200"
          >
            save
          </button>
        </form>
      </div>

      {/* ตารางแสดงข้อมูลพัสดุ */}
      <table className="mt-6 w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300">
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
      </table>
    </div>
  );
};

export default Spread;
