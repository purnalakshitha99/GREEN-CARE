import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import NavBar from '../farmer/ALNavbar';
import Swal from 'sweetalert2';
import 'jspdf-autotable';

const ContactFieldOff = () => {
  const lsEmail = localStorage.getItem('userEmail');
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchUserRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/v1/farmer/contactfo/${lsEmail}`
        );
        console.log(response.data.data);
        setRequests(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserRequests();
  }, []);

  const generatePDF = (request) => {
    const doc = new jsPDF();

    // Set font size and style
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    // Add company name
    doc.setTextColor('#50c878');
    doc.setFontSize(30);
    doc.text('GreenCare', 10, 40, { align: 'left' });

    // Add horizontal line
    doc.setDrawColor('#afe1af');
    doc.setLineWidth(0.5);
    doc.line(10, 45, 200, 45);

    // Add subheading
    doc.setFontSize(16);
    doc.setTextColor('#a5a8a6');
    doc.text('Invoice request for the field officer', 10, 55);

    // Define table column headers
    const tableHeaders = [['Field', 'Value']];

    // Define table rows with the request data
    const tableRows = [
      ['Email', request.email],
      ['Name', request.name],
      ['Address', request.address],
      ['Contact No', request.phone],
      ['Reason', request.reason],

    ];

    // Set table styles
    const tableStyle = {
      theme: 'plain',
      styles: { fontSize: 12 },
      headStyles: { fillColor: '#afe1af' },
      tableLineColor: '#c9c9c9', // Add table border color
      tableLineWidth: 0.5, // Add table border width
    };

    // Add table to the PDF
    doc.autoTable({
      head: tableHeaders,
      body: tableRows,
      startY: 70,
      ...tableStyle,
    });

    // Add horizontal line after the table
    doc.setDrawColor('#afe1af');
    doc.setLineWidth(0.5);
    doc.line(
      10,
      doc.lastAutoTable.finalY + 10,
      200,
      doc.lastAutoTable.finalY + 10
    );

    // Add Issued Date
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    const dateTimeString = `${dateString} ${timeString}`;
    doc.setFontSize(12);
    doc.setTextColor('#404040');
    doc.text(
      `Issued Date: ${dateTimeString}`,
      10,
      doc.lastAutoTable.finalY + 20
    );

    // Save the PDF
    doc.save('request.pdf');
  };

  const handleDeleteRequest = async (requestId) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (confirmed.isConfirmed) {
      try {
        await axios.delete(
          `http://localhost:3007/api/v1/farmer/contactfo/${requestId}`
        );
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== requestId)
        );
        // Swal.fire('Deleted!', 'The request has been deleted.', 'success');
      } catch (error) {
        console.log(error);
        Swal.fire('Error', 'Failed to delete the request.', 'error');
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              {requests.map((request) => (
                <div
                  key={request._id}
                  style={{
                    marginTop: '100px',
                    marginBottom: '30px',
                  }}
                >
                  <div
                    className="card"
                    style={{
                      borderRadius: '5px',
                    }}
                  >
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        {request.type}
                      </h2>
                      <hr />

                      <form>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Email
                          </label>
                          <p className="text-muted mb-0">{request.email}</p>
                        </div>
                        <hr />
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Name
                          </label>
                          <p className="text-muted mb-0">{request.name}</p>
                        </div>
                        <hr />
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Address
                          </label>
                          <p className="text-muted mb-0">{request.address}</p>
                        </div>
                        <hr />
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Contact No
                          </label>
                          <p className="text-muted mb-0">{request.phone}</p>
                        </div>
                        <hr />
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Status
                          </label>
                          <p className="text-muted mb-0">{request.status}</p>
                        </div>
                        <hr />
                    
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Reason
                          </label>
                          <p className="text-muted mb-0">{request.reason}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-left">
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-white"
                            onClick={() => generatePDF(request)}
                          >
                            Download Invoice
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4  text-white"
                            style={{
                              marginLeft: '20px',
                            }}
                            onClick={() => handleDeleteRequest(request._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFieldOff;
