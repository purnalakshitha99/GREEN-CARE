import React, { useState, useEffect } from "react"; // this is consultant view
import { Link } from "react-router-dom";
import axios from "axios";
import SoloAlert from "soloalert";
// import validation from "validator";
import jspdf from "jspdf";
import "jspdf-autotable";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import moment from "moment";
import "../../assets/styles/styles.css";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Sidebar from "../../layouts/sideBar";
import jsPDF from "jspdf";
import logo from "../NavigationBar/gcl2.png";

export default function () {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [search, setsearch] = useState("");
  const [filtered, setfiltered] = useState([]);

  const [AllItems, setAllItems] = useState([]);

  //This useEffect function used to get all user's data
  useEffect(() => {
    fetchData();
    // console.log(result);

    // setLoaderStatus(false);
    setTableStatus(false);
  }, []);

  //FetchData
  function fetchData() {
    const result = axios
      .get("http://localhost:3007/api/v1/appointment/appointment/")
      .then((response) => {
        const currentDate = new Date().toLocaleDateString();
        const filteredData = response.data.all_appointment.filter(
          (data) => data.date === currentDate
        );
        console.log(filteredData);
        setAllItems(response.data.all_appointment);
      });
  }
  function deleteItem(id) {
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
              `http://localhost:3007/api/v1/appointment/appointment/${id}`
            )
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Success!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/appolist";
              },
            });
          }
        } catch (err) {
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
          moment(ticket.date).format("DD-MM-YYYY"),
          ticket.farmer_name,
          ticket.approvel ? "Approved" : "Not approved",
          ticket.reply,
        ];
        tableRows.push(ticketData);
      });

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });

    // doc.addImage(logo, 'PNG', 10, 10, 50, 50); // Add logo image. Adjust coordinates and size as needed.

    // doc.text("No 242, Kaduwela Road, Malabe", 70, 30); // Add address
    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    doc.setFontSize(14); // The largest size for 'Appointment'
    doc.text("Appointment", 14, 20);
    
    doc.setFontSize(12); // The next largest size for 'GreenCare'
    doc.text("GreenCare", 14, 10);
    
    doc.setFontSize(10); // The smaller size for 'No: 242, Kaduwela Road, Malabe' and the date
    doc.text("No: 242, Kaduwela Road, Malabe", 14, 14);
    doc.text(`Report Generated Date - ${dateStr} `, 14, 25);
    
    doc.save(`Appointment-Details-Report_${dateStr}.pdf`);
  }

  //Search function
  function handleSearch(e) {
    if (e.length > 0) {
      var result = AllItems.filter((input) => {
        return (
          input.topic.toLowerCase().includes(e.toLowerCase()) ||
          input.farmer_name.toLowerCase().includes(e.toLowerCase())
        );
      });

      setAllItems(result);
    } else {
      fetchData();
    }
  }

  return (
  <div class="content">
    <div className="m-5" hidden={tebleStatus}>
      {/* This part used to get all users data into table */}

      <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 className="text-dark mb-0" style={{ fontSize: "3rem" }}>Appointment</h1>


        <div>
          <button
            type="button"
            class="btn btn-warning custom-btn"
            id="pdfButton"
            onClick={(e) => {
              generatePDF(AllItems);
            }}
          >
            <i className="fa fa-file-pdf"></i> Export as PDF
          </button>
        </div>
      </div>

      <hr />

      <div className="row mb-4">
        <div className="col-md-4 mb-3 ">
          <input
            className="form-control rounded-pill"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
        <div className="table-responsive">
          <table className="table table-hover table-borded ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Topic</th>
                <th scope="col-3">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Farmer Name</th>
                <th scope="col" className="text-center">
                  Approval
                </th>
                <th scope="col">Reply</th>

                <th></th>
              </tr>
            </thead>
            {AllItems.map((item, count = 0) => (
              <tbody>
                <tr>
                  <td className="col">{count + 1}</td>
                  <td>{item.topic}</td>
                  <td className="col-3">{item.description} </td>
                  <td>{moment(item.date).format("DD-MM-YYYY")} </td>
                  <td>{item.farmer_name} </td>
                  <td className="col">
                    {item.approvel ? (
                      <FaCheckCircle
                        className="icons"
                        style={{ color: "green" }}
                      />
                    ) : (
                      <FaTimesCircle
                        className="icons"
                        style={{ color: "red" }}
                      />
                    )}{" "}
                  </td>
                  <td>{item.reply} </td>

                  <td>
                    <div className="d-flex">
                      {" "}
                      <Link
                        style={{ color: "white" }}
                        to={`/appoupdate/${item._id}`}
                        className="btn btn-warning"
                      >
                        <AiFillEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          deleteItem(item._id);
                        }}
                        style={{ marginLeft: "10px", color: "red" }}
                        className="btn btn-danger"
                      >
                        <MdDelete />
                      </button>
                    </div>
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