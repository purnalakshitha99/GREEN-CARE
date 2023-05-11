import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import ('./add_salary.css')



const SalaryForm = () => {

  const navigate = useNavigate(); 

  const handleGoToUpdate = ()=>{
    navigate("/update_salary")
  }

  const [formData, setFormData] = useState({
    employee_id: "",
    month: "",
    days_worked: "",
    firstName : "",
    lastName : "",
    position : "",
    NIC :""
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
      try {
        const response = await axios.post("http://localhost:3007/api/v1/salary/salary/", formData);
        console.log(response.data);
        setFormData({
          employee_id: "",
          month: "",
          days_worked: "",
          amount : "",
          firstName : "",
          lastName : "",
          position : "",
          NIC :""
        });
        swal("Salary record has been saved", {
          icon: "success",
        })
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrors(formErrors);
    }
  };
  
  function validateNIC(nic) {
    const nicRegex = /^(\d{16}|\d{9}[Vv])$/;
    return nicRegex.test(nic);
  }
  
  const handleClear = (event) => {
    event.preventDefault();
  
    // Check if any of the form fields have a value
    const hasFormData = Object.values(formData).some((value) => value !== "");
  
    if (hasFormData) {
      swal({
        title: "Are you sure?",
        text: "This will clear all the fields. Do you want to continue?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willClear) => {
        if (willClear) {

          // Clear form fields
          setFormData({
            employee_id: "",
            month: "",
            days_worked: "",
            amount: "",
            firstName : "",
            lastName : "",
            position : ""
          });
          setErrors({});
          swal("All fields have been cleared!", {
            icon: "success",
          });
        } else {
          swal("No fields have been cleared!", {
            icon: "info"
          });
          
        }
      });
    } else {
      // Display warning if no form fields have a value
      swal({
        title: "All fields are already empty!",
        icon: "warning",
      });
    }
  };
  
   const validateForm = () => {
    let errors = {};

    
    if (!formData.employee_id.trim()) {
      errors.employee_id = "Employee ID is required";
    }
  
    if (!formData.month.trim()) {
      errors.month = "Month is required";
    }
    if (!formData.firstName.trim()) {
      errors.firstName = "first name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "last name is required";
    }

    
    if (!formData.position.trim()) {
      errors.position = "position is required";
    }

    if (!formData.NIC.trim()) {
      errors.NIC = "NIC is required";
    }
    if (!formData.days_worked.trim()) {
      errors.days_worked = "Worked days is required";
   }

   if((formData.month === "january" || formData.month === "march" || formData.month === "may" || formData.month === "july" || formData.month === "august" || formData.month === "october" || formData.month === "december") && formData.days_worked > 31){
    errors.days_worked = "worked days can not be more than 31"
   }

   if((formData.month === "april" || formData.month === "june" || formData.month === "september" || formData.month === "november") && formData.days_worked > 30 ){
    errors.days_worked = "worked days can not be more than 30 "
   }

   if(formData.month === "february" && formData.days_worked > 29){
    errors.days_worked = "worked days can not be more than 29"
   }

   if(formData.days_worked < 1){
    errors.days_worked = "worked days can not be less than 1"
   }

    if (!formData.amount.trim()) {
      errors.amount = "amount is required";
    } 

  if(validateNIC(formData.NIC)){
    errors.NIC = "NIC is not valid"
  }

   
   

    return errors;

    
  };

  return (
    <section id="learnMore" className="hero-block">
      <div class="form-container">
        <h2>Salary management</h2>

   
    <form  onSubmit={handleSubmit}>
    <div className="form-group">
    <label htmlFor="employee_id">Employee ID</label>
    <input
      type="text"
      name="employee_id"
      value={formData.employee_id}
      onChange={handleChange}
    />
    {errors.employee_id && (
      <span className="error">{errors.employee_id}</span>
    )}
  </div>

    <div className="form-group">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
    />
    {errors.amount && <span className="error">{errors.amount}</span>}
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
    />
    {errors.amount && <span className="error">{errors.amount}</span>}
  </div>

  <div class="">
  <label htmlFor="employee_type">position</label>
    <select
     name="position"
     value={formData.position}
     onChange={handleChange}
     className="add-month"
                            >
      <option value="">Select Employee position</option>
      <option value="manager">Manager</option>
      <option value="consultant">Consutant</option>
      <option value="field_visitor">Field Visitor</option>
      <option value="trainee">Trainee</option>

      </select>
    {errors.position && (
      <span className="error">{errors.position}</span>
    )}
  </div>

  <div className="form-group">
    <label htmlFor="NIC">NIC </label>
    <input
      type="text"
      name="NIC"
      value={formData.NIC}
      onChange={handleChange}
    />
    {errors.amount && <span className="error">{errors.amount}</span>}
  </div>
{/* 
<div class="form-group">
  <label htmlFor="employee_type">Employee Type</label>
    <select
     name="position"
     value={formData.position}
     onChange={handleChange}
                            >
      <option value="">Select Employee Type</option>
      <option value="manager">Manager</option>
      <option value="consultant">Consutant</option>
      <option value="field_visitor">Field Visitor</option>
      <option value="trainee">Trainee</option>

      </select>
    {errors.position && (
      <span className="error">{errors.position}</span>
    )}
  </div> */}


 
  <label htmlFor="month">Month</label>
    <select
     name="month"
     value={formData.month}
     onChange={handleChange}
     className="add-month"
                       >
      <option value="">Select Month</option>
      <option value="january">january</option>
      <option value="february">february</option>
      <option value="march">march</option>
      <option value="april">april</option>
      <option value="may">april</option>
      <option value="june">june</option>
      <option value="july">july</option>
      <option value="august">august</option>
      <option value="september">september</option>
      <option value="october">october</option>
      <option value="november">november</option>
      <option value="december">december</option>

      </select>
    {errors.month && (
      <span className="error">{errors.month}</span>
    )}

  <div className="form-group">
    <label htmlFor="days_worked">Worked Days</label>
    <input
      type="number"
      name="days_worked"
      value={formData.days_worked}
      onChange={handleChange}
    />
    {errors.days_worked && <span className="error">{errors.days_worked}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="amount">cumulative salary</label>
    <input
      type="number"
      name="amount"
      value={formData.amount}
      onChange={handleChange}
    />
    {errors.amount && <span className="error">{errors.amount}</span>}
  </div>

  <div className="form-actions">
    <button type="submit" onClick={handleSubmit}>Submit</button>
    <button type="button-clear" onClick={handleClear}>Clear</button>
    <button type="button-clear" onClick={() => navigate('/update_salary')}>updtae page</button>
    <button type="button-details" onClick={() => navigate('/edit_salary')}>Go to Details</button>  
  </div>
</form>

        </div>
    </section>
  );
  
};


export default SalaryForm;

