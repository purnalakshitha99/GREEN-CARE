import React, { useState } from "react";
import "./field_form.css";

const FieldVisitorForm= () => {
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
      registrationId: "",
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
      errors.position = "Age of the animal is required";
    } else if (isNaN(formData.position)) {
      errors.position = "Age must be a number";
    }
    if (!formData.registrationId.trim()) {
      errors.registrationId = "Weight of the animal is required";
    } else if (isNaN(formData.registrationId)) {
      errors.registrationId = "Weight must be a number";
    }
    if (!formData.workingPlace.trim()) {
      errors.workingPlace = "Animal species is required";
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
    <section id="learnMore3" className="hero-block3">

      <div className="form-container3">
        <h2>FIELD VISITOR REGISTRATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <span className="error3">{errors.firstName}</span>
            )}
          </div>
          <div className="form-group3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <span className="error3">{errors.lastName}</span>
            )}
          </div>
          <div className="form-group3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error3">{errors.email}</span>}
          </div>
          <div className="form-group3">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <span className="error3">{errors.phoneNumber}</span>
            )}
          </div>
          <div className="form-group3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error3">{errors.address}</span>}
          </div>
          <div className="form-group3">
            <label htmlFor="position">Position </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
            {errors.position && <span className="error3">{errors.position}</span>}
          </div>
          <div className="form-group3">
            <label htmlFor=" registrationId"> Registration ID:</label>
            <input
              type="text"
              name=" registrationId:"
              value={formData.registrationId}
              onChange={handleChange}
            />
            {errors.registrationId && <span className="error3">{errors.registrationId}</span>}
          </div>
          <div className="form-group3">
            <label htmlFor="workingPlace">workingPlace</label>
            <input
              type="text"
              name="workingPlace"
              value={formData.workingPlace}
              onChange={handleChange}
            />
            {errors.workingPlace && (
              <span className="error3">{errors.workingPlace}</span>
            )}
          </div>
          <div className="form-group3">
            <label htmlFor="cvAttachment">CV Attachment</label>
            <input type="file" name="cvAttachment" onChange={handleChange} />
            {errors.cvAttachment && (
              <span className="error3">{errors.cvAttachment}</span>
            )}
          </div>
          <div className="form-actions3">
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

export default FieldVisitorForm;