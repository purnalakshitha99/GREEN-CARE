import React, { useState, useEffect } from "react";
import SoloAlert from "soloalert";
import { useParams } from "react-router";
import axios from "axios";
import "./update.css";


export default function ViewOneEmployee() {
  const [isLoading, setLoading] = useState(false);

  const [textState, setTextState] = useState(true);
  const [btngrpState1, setBtnGroupstate1] = useState(true);
  const [btngrpState2, setBtnGroupstate2] = useState(false);

  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setaddress] = useState("");
  const [nic, setnic] = useState("");
  const [position, setposition] = useState("");
  const [registrationId, setregistrationId] = useState("");
  const [workingPlace, setworkingPlace] = useState("");

  const { id } = useParams();

 

  useEffect(() => {
   axios.get(`http://localhost:3007/api/v1/employee/empFormSubmit/${id}`).then((response) => {
    
   const data = response.data.data.employees;

    if (data) {
      setfirstName(data.firstName);
      setlastName(data.lastName);
      setEmail(data.email);
      setphoneNumber(data.phoneNumber);
      setaddress(data.address);
      setnic(data.nic);
      setposition(data.position);
      setregistrationId(data.registrationId);
      setworkingPlace(data.workingPlace);
  
      setLoaderStatus(false);
      setTableStatus(false);
      console.log(firstName, lastName);
    } else {
      throw new Error('No data found');
    }
   })

  
  }, [id])
  
  
  

  async function updateData(event) {
    try {
      event.preventDefault();
      const newDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        nic,
        address,
        position,
        registrationId,
        workingPlace,
      };
      const response = await axios.patch(
        `http://localhost:3007/api/v1/employee/empFormSubmit/${id}`,
        newDetails
      );
      if (response.status === 200) {
        SoloAlert.alert({
          title: "Welcome!",
          body: "Details added successfully",
          icon: "success",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      } else {
        SoloAlert.alert({
          title: "Oops!",
          body: "Something went wrong... Please try again later",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      }
    } catch (err) {}
  }

  function edit(e) {
    e.preventDefault();
    setTextState(false);
    setBtnGroupstate1(false);
    setBtnGroupstate2(true);
  }

  function cancel(e) {
    e.preventDefault();
    setTextState(true);
    setBtnGroupstate1(true);
    setBtnGroupstate2(false);
  }
    return (
      <div class="content">
        
        <div class="d-flex justify-content-center">
          
       
        <div hidden={tebleStatus}>
        <div className="form-container">
        <h3>Employee Details</h3>
        <hr />
        <form class="row g-3 needs-validation" id="inputForm2" novalidate>
        <div className="form-containerform">
          <div class="col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label">
              {" "}
              First Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              required
              defaultValue={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              disabled={textState}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip02" class="form-label">
             Last Name:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip02"
              required
              defaultValue={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              disabled={textState}
            />
          </div>
          <br />
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              Email:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
              disabled={textState}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
             Phone Number:
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTooltip03"
              disabled={textState}
              required
              defaultValue={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
            Address:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              disabled={textState}
              required
              defaultValue={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>
        
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
            Position:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              disabled={textState}
              required
              defaultValue={position}
              onChange={(e) => {
                setposition(e.target.value);
              }}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
            Registration ID:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              disabled={textState}
              required
              defaultValue={registrationId}
              onChange={(e) => {
                setregistrationId(e.target.value);
              }}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
            Working Place:
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip03"
              disabled={textState}
              required
              defaultValue={workingPlace}
              onChange={(e) => {
                setworkingPlace(e.target.value);
              }}
            />
          </div>
          
          <div
            class="col-12"
            id="btngrp"
            hidden={btngrpState1}
            style={{ marginTop: "5%" }}
          >
            
            <button class="btn1 btn-secondary">
              <i
                class="fa fa-ban"
                onClick={(e) => {
                  cancel(e);
                }}
              ></i>{" "}
              CANCEL
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              class="btn2 btn-primary"
              onClick={(e) => {
                updateData(e);
              }}
              disabled={isLoading}
            >
              <i class="fa fa-file-export"></i>{" "}
              {isLoading ? "Updating..." : "UPDATE"}
            </button>
          </div>
          <div
            class="col-12"
            id="btngrp"
            hidden={btngrpState2}
            style={{ marginTop: "5%" }}
          >
          
            <button
              type="submit"
              class="btn3 btn-primary"
              onClick={(e) => {
                edit(e);
              }}
            >
              {" "}
              <i className="far fa-edit"></i> EDIT
            </button>
            
            &nbsp;&nbsp;&nbsp;
            {/* <button type="submit" class="btn btn-danger" onClick={(e) => { deleteUser(e) }}><i class="fa fa-trash"></i>  DELETE</button> */}
          
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
     </div>
  );
}
