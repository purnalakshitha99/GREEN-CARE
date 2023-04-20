import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
 

// without using back end and api passing data to another form to edit
const EditCusInformation = ({onClick, id, formData})=> {
  
  const [name, setName] = useState(formData.name);
  const [email, setEmail] = useState(formData.email);
  const [age, setAge] = useState(formData.age);
  const [phonenumber, setPhone] = useState(formData.phonenumber);
  const [address, setAddress] = useState(formData.address);
  const [Areaoffield, setAreaoffield] = useState(formData.Areaoffield);
  console.log(id)
  // edit data
  const updafarmerinformation = ()=>{
      const farmer = {
        name: name,
        email: email,
        age:age,
        phonenumber: phonenumber,
        address: address,
        Areaoffield:Areaoffield
      };
      axios.patch(`http://localhost:3007/api/v1/fieldvisitor/cusFarmer/${id}`,farmer).then((res)=>{
        if(res.data.message === "success"){
          setName("");
          setEmail("");
          setAge("");
          setAddress("");
          setPhone("");
          setAreaoffield("");
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          return onclick();
        }else{
          console.log("fail");
        }
      })
      .catch((err)=>{
      try {
        console.log("error")
      } catch (error) {
        console.log("fields are empty")
      }
  })
  }
  
  return (
    <div>
       <div className="  justify-center flex  p-4">
          <form>
           
            <label>Full Name</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-row mb-2 shadow-md"
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />

            <label>E-Mail</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              required
              placeholder="asf@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label>Age</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex  mb-2 shadow-md"
              type="text"
              placeholder="age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              value={age}
            />

            <label>Phone Number</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="+94 - 7654321632"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phonenumber}
            />

            <label>Address</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            />
            <label>Area of Field</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="Area of field"
              onChange={(e) => {
                setAreaoffield(e.target.value);
              }}
              value={Areaoffield}
            />
            <button
              type="submit"
              className="btn-primary shadow-md ml-[150px]"
              onClick={updafarmerinformation}
            >
              Submit
            </button>
            {/* <button
              type="submit"
              className="btn-primary2 shadow-md ml-10"
              onClick={farmerinformation}
            >
              cancel
            </button> */}
          </form>
        </div>
    </div>
  )
}

export default EditCusInformation
