import React, { useEffect, useState } from "react";
import axios from "axios";
import "./doctor_modal.css";

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
    message: "",
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
    const updatedData = [...data];
    updatedData.push(doctorResponse);
    try {
      const res = await axios.patch(
        `http://localhost:3007/api/v1/animal-form/updateAnimalForm/${selectedRowData._id}`,
        updatedData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    setDoctorResponse({
      message: "",
      referenceLinks: "",
      doctorName: "",
      doctorContact: "",
      doctorEmail: "",
      sendViaEmail: false,
    });
    setShowModal(false);
  };

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
              <td>{row._id}</td>
              <td>{row.message}</td>
              <td>{row.firstName}</td>
              <td>{row.animalSpecies}</td>
              <td>{row.age}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
                  <strong>Ref:</strong> {selectedRowData._id}
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
                      id="message"
                      name="message"
                      className="bordered"
                      value={doctorResponse.message}
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
