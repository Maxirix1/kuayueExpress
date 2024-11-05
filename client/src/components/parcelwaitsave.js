import axios from "axios";
import React, { useState, useEffect } from "react";

const ParcelWaitSave = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    const fetchParcels = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/parcelswait"
        );
        setParcels(response.data);
      } catch (error) {
        console.error("Error fetch Parcel: ", error);
      }
    };
    fetchParcels();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="mt-6 w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-start text-white uppercase bg-blue-500">
          <tr>
            <th scope="col" className="px-6 py-3 text-start">
              ID PARCEL
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              From
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Portage
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Branch
            </th>
            {/* <th scope="col" className="px-6 py-3 text-start">
              Size (cm)
            </th> */}
            <th scope="col" className="px-6 py-3 text-start">
              Weight (kg)
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {parcels.length > 0 ? (
            parcels.map((parcel) => (
              <tr className="bg-white border-b" key={parcel.id_parcel}>
                <td className="px-6 py-4 font-medium text-start text-gray-900 whitespace-nowrap">
                  {parcel.id_parcel}
                </td>
                <td className="px-6 py-4 text-start text-gray-900">{parcel.from}</td>
                <td className="px-6 py-4 text-start text-gray-900">{parcel.type}</td>
                <td className="px-6 py-4 text-start text-gray-900">{parcel.branch}</td>
                <td className="px-6 py-4 text-start text-gray-900">{parcel.typeParcel}</td>
                {/* <td className="px-6 py-4 text-start text-gray-900">{parcel.width} | {parcel.lenght} | {parcel.height}</td> */}
                <td className="px-6 py-4 text-start text-gray-900">{parcel.weight}</td>
                <td className="px-6 py-4 text-start text-gray-900">{parcel.amount}</td>
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
export default ParcelWaitSave;
