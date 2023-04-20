import React, { useState } from "react";
import AppHeader from "../header";
import "./animalForm.css";
import axios from "axios";

const AnimalForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    age: "",
    weight: "",
    animalSpecies: "",
    attachment: "",
    message: "",
    status: "Pending",
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
          "http://localhost:3007/api/v1/animal-form/animalFormSubmit",
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
        address: "",
        age: "",
        weight: "",
        animalSpecies: "",
        attachment: "",
        message: "",
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
      age: "",
      weight: "",
      animalSpecies: "",
      attachment: "",
      message: "",
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
    if (!formData.age.trim()) {
      errors.age = "Age of the animal is required";
    } else if (isNaN(formData.age)) {
      errors.age = "Age must be a number";
    }
    if (!formData.weight.trim()) {
      errors.weight = "Weight of the animal is required";
    } else if (isNaN(formData.weight)) {
      errors.weight = "Weight must be a number";
    }
    if (!formData.animalSpecies.trim()) {
      errors.animalSpecies = "Animal species is required";
    }
    if (
      formData.attachment.trim() &&
      !attachmentRegex.test(formData.attachment)
    ) {
      errors.attachment =
        "Invalid file type (only PDF, DOC, and DOCX are allowed)";
    }

    return errors;
  };

  return (
    <section>
      <AppHeader />
      <div className="form-container">
        <h2><b>Submit your Request</b></h2>
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
            <label htmlFor="age">Animal Age (in years)</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <span className="error">{errors.age}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="weight">Animal Weight (in kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            {errors.weight && <span className="error">{errors.weight}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="animalSpecies">Animal Species</label>
            <input
              type="text"
              name="animalSpecies"
              value={formData.animalSpecies}
              onChange={handleChange}
            />
            {errors.animalSpecies && (
              <span className="error">{errors.animalSpecies}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attachment</label>
            <input type="file" name="attachment" onChange={handleChange} />
            {errors.attachment && (
              <span className="error">{errors.attachment}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Submit</button>
            <button type="button-clear" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AnimalForm;
