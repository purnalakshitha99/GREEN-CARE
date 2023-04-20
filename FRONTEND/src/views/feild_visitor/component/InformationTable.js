import React, { useEffect, useState } from "react";
import axios from "axios";


const InformationTable = (props) => {
  const [farmers, setFarmers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/farmer").then((res) => {
      setFarmers(res.data.data);
    });
  });
  const deleteData = (e) => {
    try {
        axios.delete(`http://localhost:5000/farmer/${e.target.value}`).then((res) => {
            console.log(res);
        });
    }catch (err) {
        console.log(err);
    }
    console.log(e.target.value);
  }
  return (
    <div className="w-full justify-center flex mt-20">

    <table >
      <thead>
        <tr >
          <td>Age</td>
          <td>Name</td>
          <td>e-mail</td>
          <td>Phone Number</td>
          <td>Area of Field</td>
          <td>address</td>
          <td>edit</td>
          <td>delete</td>
        </tr>
    
      </thead>
      <tbody>
        {farmers.map((row, index) => (
          <tr key={index}>
            <td> {row.name}</td>
            <td> {row.age}</td>
            <td>{row.email}</td>
            <td>{row.phonenumber}</td>
            <td>{row.Areaoffield}</td>
            <td>{row.address}</td>
            <td>
                <button  className="btn-primary">edit</button>
            </td>
            <td>
                <button value={row._id} onClick={deleteData} className="btn-primary">delete</button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default InformationTable;
