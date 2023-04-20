import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SoloAlert from "soloalert";
// import validation from "validator";
import jspdf from "jspdf";
import "jspdf-autotable";
import Sidebar from "../../layouts/sideBar";

export default function () {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);

  const [AllItems, setAllItems] = useState([]);

  //This useEffect function used to get all user's data
  useEffect(() => {
    async function getDetails() {
      try {
        const result = await axios.get('http://localhost:3007/api/v1/appointment/appointment/');

        // console.log(result);
        setAllItems(result.data.all_appointment);
        console.log(result.data.all_appointment);
        // setLoaderStatus(false);
        setTableStatus(false);
      } catch (err) {
        console.log(err.message);
      }
    }

    getDetails();
  }, []);

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
      "ID",
      "Topic",
      "Description",
      "Date",
      "Farmer Name",
      "Approval",
      "Reply",
      
    ];
    const tableRows = [];

tickets
  .slice(0)
  .reverse()
  .map((ticket, index) => {
    const ticketData = [
      index + 1, // add the count as the index + 1
      ticket.topic,
      ticket.description,
      ticket.date,
      ticket.farmer_name,
      ticket.approvel ? 'Approved' : 'Not approved',
      ticket.reply,
    ];
    tableRows.push(ticketData);
  });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("Appointment", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Appointment-Details-Report_${dateStr}.pdf`);
  }

  return (
    <div class="content">
      <div class="d-flex justify-content-center"></div>

      <div hidden={tebleStatus}>
        {/* This part used to get all users data into table */}
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <h3>Appointment</h3>
            <button
              type="button"
              class="btn btn-outline-danger"
              id="pdfButton"
              onClick={(e) => {
                generatePDF(AllItems);
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
          <table className="table table-hover " style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">Appointment ID</th>
                <th scope="col">Topic</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Farmer Name</th>
                <th scope="col">Approval</th>
                <th scope="col">Reply</th>
                
                <th></th>
              </tr>
            </thead>
            {AllItems.map((item, count = 0) => (
              <tbody>
                <tr>
                  <td>{count+1}</td>
                  <td>{item.topic}</td>
                  <td>{item.description} </td>
                  <td>{item.date} </td>
                  <td>{item.farmer_name} </td>
                  <td>{item.approvel? 'Approved' : 'Not approved'} </td>
                  <td>{item.reply} </td>
                  
                 

                  <td>
                    <Link to={`/get/${item._id}`} className="btn btn-primary">
                      Update
                    </Link>{" "}
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      {/* End of the */}
    </div>
  );
}
