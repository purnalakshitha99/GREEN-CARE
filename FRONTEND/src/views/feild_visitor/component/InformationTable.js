import React, { useEffect, useState } from "react";
import axios from "axios";
import EditCusInformation from "./EditCusInformation";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import NavBar from "../../../layouts/navbar";
import PopupReport from "./PopupReport";

const InformationTable = (props) => {
  const [farmers, setFarmers] = useState([]);
  const [Id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({});
  // pop up information
  const [popreport, setpopreport] = useState(false);
  const handleClose = () => setpopreport(false);

  useEffect(() => {
    axios
      .get("http://localhost:3007/api/v1/fieldvisitor/cusFarmer")
      .then((res) => {
        setFarmers(res.data);
      });
  });
  // edit data
  const editData = (e, data) => {
    console.log();
    setId(e.target.value);
    setData(data);
    setEdit(true);
  };
  const deleteData = (e) => {
    try {
      axios
        .delete(
          `http://localhost:3007/api/v1/fieldvisitor/cusFarmer/${e.target.value}`
        )
        .then((res) => {
          Swal.fire("Good job!", "You clicked the button!", "success");
        });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    console.log(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="mt-[100px] font-bold text-2xl justify-center flex">
        Farmer Details
      </div>
      {edit ? (
        <EditCusInformation
          onClick={() => setEdit(false)}
          id={Id}
          formData={data}
        />
      ) : (
        <div className="tableDiv">
          <table className="table table-success table-striped">
            <thead className="fw-bold">
              <tr>
                <td>Name</td>
                <td>Age</td>
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
                    <button
                      value={row._id}
                      onClick={(e) => {
                        editData(e, row);
                      }}
                      className="btn3"
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      value={row._id}
                      onClick={deleteData}
                      className="btn4 "
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Link to="/fieldinformation">click</Link> */}
        </div>
      )}
      <PopupReport onClose={handleClose} visivle={popreport} />
    </>
  );
};
export default InformationTable;
