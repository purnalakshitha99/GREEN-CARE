import React, { useState } from "react";
import AppHeader from "../header";
import "./animalForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phoneNumber: "",
  subject: "",
  animalSpecies: "",
  weight: "",
  age: "",
  attachment: "",
  description: "",
};

const AnimalForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^(0\d{9})$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
    }

    if (!formData.animalSpecies) {
      errors.animalSpecies = "Animal species is required";
    }

    if (!formData.weight) {
      errors.weight = "Weight is required";
    } else if (!/^[0-9]+$/.test(formData.weight)) {
      errors.weight = "Weight is invalid";
    }

    if (!formData.age) {
      errors.age = "Age is required";
    } else if (!/^[0-9]+$/.test(formData.age)) {
      errors.age = "Age is invalid";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData(initialState);
    }
  };

  const handleClear = () => {
    setFormData(initialState);
    setErrors({});
  };
  return (
 <section id="learnMore" className="hero-block">
      <header id="header">
        <AppHeader />
      </header>
      
      {/* <div class="container"></div> */}
      <div class="container2">
      <h2>Responsive Form</h2>
   <form onSubmit={handleSubmit}>
  <div class="row">
    <div class="col-25">
      <label for="fname">First Name</label>
    </div>
    <div class="col-75">
       <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div class="col-75">
      <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
     <label htmlFor="email">Email</label>
    </div>
    <div class="col-75">
     <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
    </div>
  </div>
  
   <div class="row">
    <div class="col-25">
      <label htmlFor="phoneNumber">Phone Number</label>
    </div>
    <div class="col-75">
      <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
    </div>
  </div>
   <div class="row">
    <div class="col-25">
      <label htmlFor="address">Address</label>
    </div>
    <div class="col-75">
      <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <span>{errors.address}</span>}
    </div>
  </div>

  
  <div class="row">
    <div class="col-25">
      <label htmlFor="age">Age</label>
    </div>
    <div class="col-75">
     <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <span>{errors.age}</span>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label htmlFor="weight">Weight</label>
    </div>
    <div class="col-75">
     <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            {errors.weight && <span>{errors.weight}</span>}
    </div>
  </div>
  <div class="row">
    <div class="col-25">
       <label htmlFor="animalSpecies">Animal Species</label>
    </div>
    <div class="col-75">
      <select id="animal" name="animal">
        <option value="cow">Cow</option>
        <option value="horse">Horse</option>
        <option value="goat">Goat</option>
        <option value="pig">Pig</option>
        <option value="chicken">Chicken</option>
        <option value="sheep">Sheep</option>
      </select>
    </div>
    <div class="row">
    <div class="col-25">
      <label for="attachment">file attachement</label>
    </div>
    <div class="col-75">
       <input
       
              type="file"
              name="attachment"
              value={formData.attachment}
              onChange={handleChange}
            />
            {errors.attachment && <span>{errors.attachment}</span>}
    </div>
  </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="subject">Help</label>
    </div>
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    </div>
  </div>
  <br/>
  <div class="row">
    <div class="button">
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="clear" class="btn btn-primary" onClick={handleClear}>Clear</button>
    </div>
  </div>
  </form>
</div>

    </section>
    
  );
};

export default AnimalForm;
