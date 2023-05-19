import React, { useState } from "react";
import "./edit_staff_details.css";

const EditStaffDetailsForm= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
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
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.position.trim()) {
      errors.position = "Position of the employee is required";
    } else if (isNaN(formData.position)) {
      errors.position = "Position is required";
    }
    if (!formData.registrationId.trim()) {
      errors.registrationId = "Registration ID of the employee  is required";
    } else if (isNaN(formData.registrationId)) {
      errors.registrationId = "Invalid Registration Number";
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
    <section id="learnMore" className="hero-block">

      <div className="form-container">
        <h2>EDIT STAFF DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.position && <span className="error">{errors.position}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="registrationId">Registration ID</label>
            <input
              type="text"
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
            />
            {errors.registrationId && <span className="error">{errors.registrationId}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="workingPlace">Working Place</label>
            <input
              type="text"
              name="workingPlace"
              value={formData.workingPlace}
              onChange={handleChange}
            />
            {errors.workingPlace && (
              <span className="error">{errors.workingPlace}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cvAttachment">CV Attachment</label>
            <input type="file" name="cvAttachment" onChange={handleChange} />
            {errors.cvAttachment && (
              <span className="error">{errors.cvAttachment}</span>
            )}
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button-clear" onClick={handleClear}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditStaffDetailsForm;