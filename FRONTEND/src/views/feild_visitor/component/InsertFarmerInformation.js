import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../layouts/navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const InsertFarmerInformation = ({ onClick, formData }) => {
  const navigate = useNavigate();

  //dropdown
  const [isactive, setIsactive] = useState(false);

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
          Swal.fire("Good job!", "You clicked the button!", "success");
        } else {
          console.log("error");
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
      <NavBar />
      <div>
        <h1 className="d-flex justify-content-center align-items-center mb-5">
          Farmer Information
        </h1>
        <div className="form  d-flex justify-content-center align-items-center bg-white mb-5">
          <div className="div2 w-50 border p-5">
            <form className="">
              {/* Boostrap css */}
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="textfullname"
                  aria-describedby="emailHelp"
                  placeholder="Full name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </div>
              <div class="mb-3 ">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="asf@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Age
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="textfullname"
                  aria-describedby="emailHelp"
                  placeholder="age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  value={age}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="phonenumber"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="+94 - 7654321632"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phonenumber}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Address{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="textfullname"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                />
              </div>
              <div class="mb-5">
                <label for="exampleInputEmail1" class="form-label">
                  Area of field
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Area of field"
                  onChange={(e) => {
                    setAreaoffield(e.target.value);
                  }}
                  value={Areaoffield}
                />
              </div>

              <div class="d-flex justify-content-center mb-5">
                <button
                  type="submit"
                  class="btn1 btn-success px-5 "
                  onClick={farmerinformation}
                >
                  Submit
                </button>
                <button
                  type="cancel"
                  class="btn2 btn-danger ms-5 px-5 "
                  onClick={"/"}
                >
                  cancel
                </button>

              
              </div>

          
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertFarmerInformation;
