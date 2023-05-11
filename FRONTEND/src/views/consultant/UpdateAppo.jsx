import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function UpdateAppo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [appointment, setAllappointment] = useState({
    approvel: false,
  });

  useEffect(() => {
    const getappointment = () => {
      axios
        .get(`http://localhost:3007/api/v1/appointment/appointment/${id}`)
        .then((res) => {
            console.log(res.data.data.appointment);
            setAllappointment(res.data.data.appointment);
          
        })
        .catch((err) => alert(err.message));
    };
    getappointment();
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setAllappointment((prevItem) => ({
      ...prevItem,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3007/api/v1/appointment/appointment/${id}`, appointment)
      .then(() => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            navigate("/appolist");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("Not Updated", err.message, "error"));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <form className="w-50">
    <h1 className="text-center mb-5">Update Appointment</h1>
    <div className="mb-3 row">
      <label htmlFor="reply" className="col-sm-2 col-form-label">
        Reply
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id="reply"
          name="reply"
          value={appointment.reply}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>
    </div>
    <div className="mb-3 row">
      <div className="col-sm-10 offset-sm-2">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="approvalCheckbox"
            name="approvel"
            checked={appointment.approvel}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <label className="form-check-label" htmlFor="approvalCheckbox">
            Approval
          </label>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
  <button
    type="button"
    className="btn btn-primary "
    style={{ backgroundColor: '#15A891' }}
    onClick={(e) => {
      handleFormSubmit(e);
    }}
  >
    Save Changes
  </button>
  <Link to="/appolist">
    <button
      className="btn btn-secondary "
      style={{
        margin: '10px',
        backgroundColor: 'white',
        color: '#15A891',
        border: '2px solid #15A891',
      }}
    >
      Cancel
    </button>
  </Link>
</div>

  </form>
</div>
  );
}
