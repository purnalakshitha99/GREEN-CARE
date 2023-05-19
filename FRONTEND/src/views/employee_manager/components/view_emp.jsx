import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SoloAlert from "soloalert";
// import validation from "validator";
import jspdf from "jspdf";
import "jspdf-autotable";
import "./view_emp.css";


export default function RetrieveEmployee() {
  const { id } = useParams();
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [search, setsearch] = useState("");
  // const [filtered, setfiltered] = useState([]);

  const [AllEmployee, setAllEmployee] = useState([]);

  //This useEffect function used to get all user's data
  useEffect(() => {
    async function getDetails() {
      try {
        const result = await axios.get(
          "http://localhost:3007/api/v1/employee/empFormSubmit"
        );
        console.log(result.data);

        // console.log(result);
        setAllEmployee(result.data);
        
        // setLoaderStatus(false);
        setTableStatus(false);
      } catch (err) {
        console.log(err.message);
      }
    }

    getDetails();
  }, []);

  //This function is used to delete specific user
  function deleteEmployee(id) {
    // id.preventDefault();

    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          const result = await (
            await axios.delete(
              `http://localhost:3007/api/v1/employee/empFormSubmit/${id}`
            )
          ).status;
          // console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/view_emp";
              },
            });
          }
        }
       catch (err) {
          SoloAlert.alert({
            title: "Oops!",
            body: "Something went wrong",
            icon: "error",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }

  // //This useEffect method is used to perform a searching function
  // useEffect(() => {
  //   setfiltered(
  //     AllItems.filter((items) => {
  //       return items.name.toLowerCase().includes(search.toLowerCase());
  //     })
  //   );
  // }, [search, AllItems]);

  //This function used to generate a pdf
  function generatePDF(tickets) {
    const doc = new jspdf();
    const tableColumn = [
      "EID",
      "First Name",
      "Last Name",
      "Email",
      "Phone Number",
      "Address",
      "Position",
      "Registration Number",
      "Working Place",
      
    ];
    const tableRows = [];

    tickets
      .slice(0)
      .reverse()
      .map((ticket, index) => {
        const ticketData = [
          index + 1,
          ticket.firstName,
          ticket.lastName,
          ticket.email,
          ticket.phoneNumber,
          ticket.address,
          ticket.position,
          ticket.registrationId,
          ticket.workingPlace,
        ];
        tableRows.push(ticketData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("GREEN CARE", 14, 15).setFontSize(16);
    doc.text("Employee Details Report", 14, 23).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 32);
    doc.save(`Employee Details Report_${dateStr}.pdf`);
  }

  return (
    <div class="content">
      {/* <div class="d-flex justify-content-center"></div> */}

      <div hidden={tebleStatus}>
        {/* This part used to get all users data into table */}
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <h3>VIEW-Employees</h3>
            <button
              type="button"
              class="btn btn-outline-danger"
              id="pdfButton"
              onClick={(e) => {
                generatePDF(AllEmployee);
              }}
            >
              <i className="fa fa-file-pdf"></i> PDF
            </button>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
            </form>
          </div>
        </nav>
        <hr />

        <div>
          <table className="table table-hover table-bordered" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">EID </th>
                <th scope="col">Fisrt Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Position</th>
                <th scope="col">Reg ID</th>
                <th scope="col">Working Place</th>
                <th></th>
              </tr>
            </thead>
            {AllEmployee.map((item, count = 0) => (
              <tbody>
                <tr>
                  <td>{count + 1}</td>
                  <td>{item.firstName}</td>
                  <td> {item.lastName} </td>
                  <td>{item.email}</td>
                  <td> {item.phoneNumber} </td>
                  <td>{item.address}</td>
                  <td>{item.position}</td>
                  <td>{item.registrationId}</td>
                  <td>{item.workingPlace}</td>
                  <td>
                    <Link to={`/update/${item._id}`} className="update-button red">
                      Update
                    </Link>{" "}``
                    <button
                      type="button"
                      onClick={() => {
                        deleteEmployee(item._id);
                      }}
                      className="delete-button"
   >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
