import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./doctor_modal.css";
import jspdf from "jspdf";
import moment from "moment";

const RequestsTable = ({ category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/v1/animal-form/${category}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState({});
  const [AllItems, setAllItems] = useState([]);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowModal(true);
    console.log(showModal);
    console.log(rowData);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [doctorResponse, setDoctorResponse] = useState({
    doctorMessage: "",
    referenceLinks: "",
    doctorName: "",
    doctorContact: "",
    doctorEmail: "",
    sendViaEmail: false,
    status: "Completed",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDoctorResponse((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:3007/api/v1/animal-form/updateAnimalForm/${selectedRowData._id}`,
        doctorResponse
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    setDoctorResponse({
      doctorMessage: "",
      referenceLinks: "",
      doctorName: "",
      doctorContact: "",
      doctorEmail: "",
      sendViaEmail: false,
    });
    setShowModal(false);
  };

  const handleDelete = async (row) => {
    try {
      const res = await axios.delete(
        `http://localhost:3007/api/v1/animal-form/delete-docs/${row._id}`
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
      window.location.reload(false);
  };

  //function to generate a pdf
function generatePDF(tickets) {
  const doc = new jspdf();
  const tableColumn = [
    "ID",
    "Animal Species",
    "Name",
    "Age",
    "Weight",
    "message",   
  ];
  const tableRows = [];

tickets
.slice(0)
.reverse()
.map((ticket, index) => {
  const ticketData = [
    index + 1, // add the count as the index + 1
    ticket.animalSpecies,
    ticket.firstName,
    ticket.age,
    ticket.weight,
    ticket.message,
  ];
  tableRows.push(ticketData);
});

  doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },
    startY: 35,
  });
  const date = Date().split(" ");
  const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  doc.text(`${category} Appointments`, 14, 15).setFontSize(12);
  doc.text(`Report Generated Date - ${dateStr} `, 14, 23);
  doc.save(`Doc-Appointment-Details-Report_${dateStr}.pdf`);
}


  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Reference Number</th>
            <th>Description</th>
            <th>Name</th>
            <th>Animal Type</th>
            <th>Age</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row._id} onClick={() => handleRowClick(row)}>
              <td>{'#'+row._id.substring(0, 7)}</td>
              <td>{row.message}</td>
              <td>{row.firstName}</td>
              <td>{row.animalSpecies}</td>
              <td>{row.age}</td>
              <td>{row.weight}</td>
              {category === "Completed" ? (
                <td>
                  <i
                    className="fa fa-trash"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(row);
                    }}
                  ></i>
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button
           type="button"
           class="btn btn-warning custom-btn"
           id="pdfButton"
           onClick={(e) => {
             generatePDF(data);
           }}
           >
           <i className="fa fa-file-pdf"></i> Export as PDF
           </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-columns">
              <div className="column">
                <h2>Patient Details</h2>
                <p>
                  <strong>Ref:</strong> {'#'+selectedRowData._id.substring(0, 7)}
                </p>
                <p>
                  <strong>First Name:</strong> {selectedRowData.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {selectedRowData.lastName}
                </p>
                <p>
                  <strong>Animal Type:</strong> {selectedRowData.animalSpecies}
                </p>
                <p>
                  <strong>Age:</strong> {selectedRowData.age}
                </p>
                <p>
                  <strong>Weight:</strong> {selectedRowData.weight}
                </p>
                <p>
                  <strong>Message:</strong> {selectedRowData.message}
                </p>
                <p>
                  <strong>Address:</strong> {selectedRowData.address}
                </p>
                <p>
                  <strong>Phone Number:</strong> {selectedRowData.phoneNumber}
                </p>
                <p>
                  <strong>Attachments:</strong> {selectedRowData.attachment}
                </p>
              </div>
              <div className="column-2">
                <div className="doctor-response">
                  <h2>Doctor's Response:</h2>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="doctorMessage"
                      name="doctorMessage"
                      className="bordered"
                      value={doctorResponse.doctorMessage}
                      onChange={handleInputChange}
                    />

                    <label htmlFor="referenceLinks">Reference Links:</label>
                    <input
                      type="text"
                      id="referenceLinks"
                      name="referenceLinks"
                      className="bordered"
                      value={doctorResponse.referenceLinks}
                      onChange={handleInputChange}
                    />

                    <label htmlFor="doctorName">Doctor Name:</label>
                    <input
                      type="text"
                      id="doctorName"
                      name="doctorName"
                      className="bordered"
                      value={doctorResponse.doctorName}
                      onChange={handleInputChange}
                    />

                    <label htmlFor="doctorContact">Doctor Contact:</label>
                    <input
                      type="text"
                      id="doctorContact"
                      name="doctorContact"
                      className="bordered"
                      value={doctorResponse.doctorContact}
                      onChange={handleInputChange}
                    />

                    <label htmlFor="doctorEmail">Doctor Email:</label>
                    <input
                      type="email"
                      id="doctorEmail"
                      name="doctorEmail"
                      className="bordered"
                      value={doctorResponse.doctorEmail}
                      onChange={handleInputChange}
                    />

                    <div className="send-via-email">
                      <input
                        type="checkbox"
                        id="sendViaEmail"
                        name="sendViaEmail"
                        checked={doctorResponse.sendViaEmail}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="sendViaEmail" className="sendviamail">
                        Send Response via Email
                      </label>
                    </div>

                    <button type="submit">Submit</button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestsTable;
