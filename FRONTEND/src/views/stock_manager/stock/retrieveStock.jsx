import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import SoloAlert from "soloalert";
// import validation from "validator";
import jspdf from "jspdf";
import "jspdf-autotable";

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
        const result = await (
          await axios.get("http://localhost:3007/api/v1/stock-manager/item/")
        ).data.data;
        // console.log(result);
        setAllItems(result);
        console.log(result);
        setLoaderStatus(true);
        setTableStatus(false);
      } catch (err) {
        console.log(err.message);
      }
    }

    getDetails();
  });

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
      "Item ID",
      "Name",
      "Description",
      "Price",
      "exp",
      "mfd",
      "category",
      "quantity",
    ];
    const tableRows = [];

    tickets
      .slice(0)
      .reverse()
      .map((ticket) => {
        const ticketData = [
          ticket.name,
          ticket.description,
          ticket.price,
          ticket.exp,
          ticket.mfd,
          ticket.category,
          ticket.quantity,
          ticket.itemId,
        ];
        tableRows.push(ticketData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.text("stock-Details-Report", 14, 15).setFontSize(12);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
    doc.save(`Stock-Details-Report_${dateStr}.pdf`);
  }

  return (
    <div class="content">
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border"
          role="status"
          style={{ width: "10rem", height: "10rem", marginTop: "100px" }}
          hidden={loaderStatus}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div hidden={tebleStatus}>
        {/* This part used to get all users data into table */}
        <nav className="navbar bg-white">
          <div className="container-fluid">
            <h3>VIEW-Stocks</h3>
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

        <div className="bodyContent">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Item ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">exp</th>
                <th scope="col">mfd</th>
                <th scope="col">category</th>
                <th scope="col">quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered
                .slice(0)
                .reverse()
                .map((Items) => {
                  return (
                    <tr>
                      <td>{Items.itemId}</td>
                      <td>{Items.name}</td>
                      <td> {Items.description} </td>
                      <td>{Items.price}</td>
                      <td> {Items.exp} </td>
                      <td>{Items.mfd}</td>
                      <td>{Items.category}</td>
                      <td>{Items.quantity}</td>

                      <td>
                        <Link to={"/retrieve" + Items._id} className="Edit">
                          {" "}
                          <i className="far fa-edit"></i>{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* End of the */}
    </div>
  );
}
