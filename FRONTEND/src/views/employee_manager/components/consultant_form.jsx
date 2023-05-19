import React, { useState } from "react";
import "./consultant_form.css";
import axios from "axios";

const EmpConsultForm= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nic:"",
    address: "",
    position: "",
    registrationId: "",
    workingPlace: "",
    cvAttachment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      try {
        const res = await axios.post(
          "http://localhost:3007/api/v1/employee/empFormSubmit",
          formData
        );
        console.log(res.data); // handle response from the server
      } catch (err) {
        console.error(err); // handle error from the server
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        nic:"",
        address: "",
        position: "",
        registrationId: "",
        workingPlace: "",
        cvAttachment: "",
      });
      alert("Form submitted successfully!");
    } else {
      setErrors(formErrors);
    }
  };

  const handleClear = (event) => {
    event.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nic:"",
      address: "",
      position: "",
      registrationId:  "",
      workingPlace: "",
      cvAttachment: "",
    });
    setErrors({});
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const phoneNumberRegex = /^\d{10}$/g;
    const attachmentRegex = /\.(pdf|doc|docx)$/i;
    const nicRegex = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;


    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number (10 digits required)";
    }
    if (!formData.nic.trim()) {
      errors.nic = "NIC is required ";
    } else if (!nicRegex.test(formData.nic)) {
      errors.nic = "Invalid NIC number";
    }
    // if (!formData.nic.trim()) {
    //   errors.nic = "NIC is required ";
    // }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.position.trim()) {
      errors.position = "Position is required";
    }
    
    if (!formData.registrationId.trim()) {
      errors.registrationId = "Registration ID  is required";
    } 
    if (!formData.workingPlace.trim()) {
      errors.workingPlace = "Working Place is required";
    }
    if (
      formData.cvAttachment.trim() &&
      !attachmentRegex.test(formData.cvAttachment)
    ) {
      errors.cvAttachment =
        "Invalid file type (only PDF, DOC, and DOCX are allowed)";
    }

    return errors;
  };

  return (
    <section id="learnMore1" className="hero-block1">

      <div className="form-container1">
        <h2> EMPLOYEE REGISTRATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error1">{errors.firstName}</span>
            )}
          </div>
          <div className="form-group1">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error1">{errors.lastName}</span>
            )}
          </div>
          <div className="form-group1">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error1">{errors.email}</span>}
          </div>
          <div className="form-group1">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error1">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="form-group1">
            <label htmlFor="nic">NIC</label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
            />
            {errors.nic && (
              <span className="error1">{errors.nic}</span>
            )}
          </div>
          <div className="form-group1">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error1">{errors.address}</span>}
          </div>
          <div className="form-group1">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.position && <span className="error1">{errors.position}</span>}
          </div>
          <div className="form-group1">
            <label htmlFor="registrationId">Registration ID</label>
            <input
              type="text"
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
            />
            {errors.registrationId && <span className="error">{errors.registrationId}</span>}
          </div>
          <div className="form-group1">
            <label htmlFor="workingPlace">Working Place</label>
            <input
              type="text"
              name="workingPlace"
              value={formData.workingPlace}
              onChange={handleChange}
            />
            {errors.workingPlace && (
              <span className="error1">{errors.workingPlace}</span>
            )}
          </div>
          <div className="form-group1">
            <label htmlFor="cvAttachment">CV Attachment</label>
            <input type="file" name="cvAttachment" onChange={handleChange} />
            {errors.cvAttachment && (
              <span className="error1">{errors.cvAttachment}</span>
            )}
          </div>
          <div className="form-actions1">
            <button type="submit">Register</button>
            <button type="button-clear" onClick={handleClear}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmpConsultForm;