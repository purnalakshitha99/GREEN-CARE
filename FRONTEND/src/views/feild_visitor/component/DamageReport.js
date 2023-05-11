import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../layouts/navbar";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";

const DamageReport = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [d_arrival, setD_Arrival] = useState("");
  const [d_departure, setD_Depature] = useState("");
  const [date, setDate] = useState("");
  const [damagedetails, setDamagedetails] = useState("");
  const [files, setFiles] = useState("");

  async function CreateReport(ev) {
    if (
      (fullname === "",
      email === "",
      phonenumber === "",
      d_arrival === "",
      d_departure === "",
      date === "",
      damagedetails === "")
    ) {
      alert("Please enter");
    }
    ev.preventDefault();
    const data = new FormData();
    data.set("fullname", fullname);
    data.set("email", email);
    data.set("phonenumber", phonenumber);
    data.set("d_arrival", d_arrival);
    data.set("d_departure", d_departure);
    data.set("date", date);
    data.set("damagedetails", damagedetails);
    console.log(files);
    // data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:3007/newpost", {
      method: "POST",

      body: data,
    });
    if (response.status === 400) {
      // toast.success("fiels are empty ");
    } else if (response.status === 201) {
      // toast.success("Resource update successfully");
      // setTimeout(() => {
      //   setRedirect(true);
      // }, 1000);
    } else {
      //toast.error("Server error");
    }
  }
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      {/* boostrap form */}
      <h1 className="d-flex justify-content-center align-items-center mb-5">
        Damage Report
      </h1>

      <div className="form  d-flex justify-content-center align-items-center bg-white mb-5">
        <div className="div2 w-50 border p-5">
          {/* validation form */}
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Jane"
                required
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                value={fullname}
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustomUsername" class="form-label">
                Email
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  placeholder="asd@gmail.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>

            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                Arrival time
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(e) => {
                  setD_Arrival(e.target.value);
                }}
                value={d_arrival}
              />
              <div class="invalid-feedback">Please provide</div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                Depature time
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(e) => {
                  setD_Arrival(e.target.value);
                }}
                value={d_departure}
              />
            </div>

            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                Phone number
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phonenumber}
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                Date
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
                min={getCurrentDate()}
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="mb-5">
              <label for="validationCustom03" class="form-label">
                Damage details
              </label>
              <textarea
                type="text"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(e) => {
                  setDamagedetails(e.target.value);
                }}
                value={damagedetails}
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="mb-5">
              <label for="validationCustom03" class="form-label">
                Upload Photo
              </label>
              <input
                type="file"
                class="form-control"
                id="validationCustom03"
                required
                onChange={(ev) => setFiles(ev.target.files)}
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="d-flex justify-content-center mb-5">
              <Link to={"/visitorhome"}>
                <button
                  class="btn1  btn-primary "
                  type="submit"
                  onClick={CreateReport}
                >
                  Submit form
                </button>
              </Link>

              <Link to={"/visitorhome"}>
                <button class="btn2 ms-5 btn-danger" type="submit">
                  cancel 
                </button>
              </Link>
            </div>
          </form>
          {/* validation form end */}

          {/* <div class="d-flex justify-content-center mb-5">
              <button
                type="submit"
                class="btn1 btn-success px-5 "
                onClick={CreateReport}
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
            </div> */}
        </div>
      </div>
    </>
  );
};

export default DamageReport;

{
  /* <form className=" justify-center flex  mt-[150px]">
        <div class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide  text-xs font-bold mb-2 rounde"
                // border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex  mb-2 shadow-md
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstname}
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastname}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-Mail
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                type="email"
                placeholder="asd@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Arival time
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="time"
                onChange={(e) => {
                  setArrival(e.target.value);
                }}
                value={arrival}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Dipature Time
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-2 leading-tight "
                id="grid-last-name"
                type="time"
                onChange={(e) => {
                  setDepature(e.target.value);
                }}
                value={departure}
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Date
            </label>
            <input
              className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-2 leading-tight "
              id="grid-last-name"
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Problem
              </label>
              <textarea
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-5 px-4 mb-3 leading-tight "
                type="text"
                onChange={(e) => {
                  setProblem(e.target.value);
                }}
                value={problem}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Upload Image
              </label>
              <input
                className="block w-[250px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none px-2 py-2 dark:border-gray-600 dark:placeholder-gray-400 "
                type="file"
                onChange={(ev) => setFiles(ev.target.files)}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Solution
              </label>
              <textarea
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-5 px-4 mb-3 leading-tight "
                type="text"
                onChange={(e) => {
                  setSolution(e.target.value);
                }}
                value={solution}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary shadow-md mb-5 ml-[150px]"
            onClick={CreateReport}
            // onClick={()=>navigate("/infotable")}
          >
            Submit
          </button>
        </div>
      </form> */
}
