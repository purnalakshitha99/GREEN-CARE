import React, { useState } from "react";
import "./doc_form.css";


const DoctorForm= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    doctorId: "",
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
        doctorId: "",
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
      doctorId: "",
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
      errors.position = "Position is required";
    } else if (isNaN(formData.position)) {
      errors.position = "Age must be a number";
    }
    if (!formData.doctorId.trim()) {
      errors.doctorId = "Doctor Id is required";
    } else if (isNaN(formData.doctorId)) {
      errors.doctorId = "Doctor Id is required";
    }
    if (!formData.workingPlace.trim()) {
      errors.workingPlace = " Working Place is required";
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
    <section id="learnMore2" className="hero-block2">

      <div className="form-container2">
        <h2>DOCTOR REGISTRATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error2">{errors.firstName}</span>
            )}
          </div>
          <div className="form-group2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error2">{errors.lastName}</span>
            )}
          </div>
          <div className="form-group2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error2">{errors.email}</span>}
          </div>
          <div className="form-group2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error2">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="form-group2">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error2">{errors.address}</span>}
          </div>
          <div className="form-group2">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
            {errors.age && <span className="error2">{errors.age}</span>}
          </div>
          <div className="form-group2">
            <label htmlFor="doctorId">Doctor ID</label>
            <input
              type="text"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
            />
            {errors.doctorId && <span className="error2">{errors.doctorId}</span>}
          </div>
          <div className="form-group2">
            <label htmlFor="workingPlace">Working Place</label>
            <input
              type="text"
              name="workingPlace"
              value={formData.workingPlace}
              onChange={handleChange}
            />
            {errors.workingPlace && (
              <span className="error2">{errors.workingPlace}</span>
            )}
          </div>
          <div className="form-group2">
            <label htmlFor="cvAttachment">CV Attachment</label>
            <input type="file" name="cvAttachment" onChange={handleChange} />
            {errors.cvAttachment && (
              <span className="error2">{errors.cvAttachment}</span>
            )}
          </div>
          <div className="form-actions2">
            <button type="submit">Register</button>
            <button type="button-cancel" onClick={handleClear}>
            Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DoctorForm;


