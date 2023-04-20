import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SoloAlert from "soloalert";
// import validation from "validator";
import jspdf from "jspdf";
import "jspdf-autotable";
import Sidebar from "../../layouts/sideBar";

export default function RetrieveStock() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);

  const [AllItems, setAllItems] = useState([]);

  //This useEffect function used to get all user's data
  useEffect(() => {
    async function getDetails() {
      try {
        const result = await axios.get(
          "http://localhost:3007/api/v1/appointment/appointment/"
        );

        // console.log(result);
        setAllItems(result.data);
        console.log(result.data);
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
  // function generatePDF(tickets) {
  //   const doc = new jspdf();
  //   const tableColumn = [
  //     "Item ID",
  //     "Name",
  //     "Description",
  //     "Price",
  //     "exp",
  //     "mfd",
  //     "category",
  //     "quantity",
  //   ];
  //   const tableRows = [];

  //   tickets
  //     .slice(0)
  //     .reverse()
  //     .map((ticket) => {
  //       const ticketData = [
  //         ticket.itemId,
  //         ticket.name,
  //         ticket.description,
  //         ticket.price,
  //         ticket.exp,
  //         ticket.mfd,
  //         ticket.category,
  //         ticket.quantity,
  //       ];
  //       tableRows.push(ticketData);
  //     });

  //   doc.autoTable(tableColumn, tableRows, {
  //     styles: { fontSize: 8 },
  //     startY: 35,
  //   });
  //   const date = Date().split(" ");
  //   const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  //   doc.text("stock-Details-Report", 14, 15).setFontSize(12);
  //   doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
  //   doc.save(`Stock-Details-Report_${dateStr}.pdf`);
  // }

  return (
    <div class="content">
      <div class="d-flex justify-content-center"></div>

      <div hidden={tebleStatus}>
        {/* This part used to get all users data into table */}
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <h3>VIEW-Stocks</h3>
            {/* <button
              type="button"
              class="btn btn-outline-danger"
              id="pdfButton"
              onClick={(e) => {
                generatePDF(AllItems);
              }}
            >
              <i className="fa fa-file-pdf"></i> PDF
            </button> */}
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
                <th scope="col">Item ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">exp</th>
                <th scope="col">mfd</th>
               
                <th></th>
              </tr>
            </thead>
            {AllItems.map((item, count = 0) => (
              <tbody>
                <tr>
                  <td>{count + 1}</td>
                  <td>{item.topic}</td>
                  <td>{item.description} </td>
                  <td>{item.reply}</td>
                  <td>{item.date} </td>
                  <td>{item.approvel} </td>
                  <td>{item.farmer_name}</td>
                 

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
