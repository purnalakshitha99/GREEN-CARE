import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../farmer/ALNavbar';
import Swal from 'sweetalert2';

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
                        Request Details
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
                            Reason
                          </label>
                          <p className="text-muted mb-0">{request.reason}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-left">
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Download As PDF
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

