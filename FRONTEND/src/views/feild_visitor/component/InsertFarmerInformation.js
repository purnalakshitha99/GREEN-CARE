import React, { useState } from "react";
import axios from "axios";
// import NavBar from "../NavBar";

const InsertFarmerInformation = ({ onClick, formData }) => {
  //

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [Areaoffield, setAreaoffield] = useState("");
  //const[animal, setAnimal] = useState("");
  const farmerinformation = () => {
    const farmerdoc = {
      name: name,
      address: address,
      age: age,
      email: email,
      phonenumber: phonenumber,
      Areaoffield: Areaoffield,
      // animal: animal,
    };

    axios
      .post("http://localhost:3007/api/v1/fieldvisitor/cusFarmer/", farmerdoc)
      .then((res) => {
        if (res.data.message === "success") {
          console.log(res.data);
        } else {
          console.log(res.data);
        }
      })
      .catch((error) => {
        try {
          console.log(error);
        } catch (error) {
          console.log("error");
        }
      });
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className=" mt-20">
        {/* isuru */}

        <div className="  justify-center flex ">
          <form>
            <h2>Farmer Information</h2>
            <label>Full Name</label>

            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[200px] flex flex-row mb-2 shadow-md"
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
              className="btn-primary shadow-md"
              onClick={farmerinformation}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InsertFarmerInformation;
