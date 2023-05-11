import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../layouts/navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const FieldReport = () => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDepature] = useState("");
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [files, setFiles] = useState("");

  async function CreateReport(ev) {
    if (
      (firstname === "",
      lastname === "",
      email === "",
      arrival === "",
      departure === "",
      date === "",
      problem === "",
      solution === "")
    )
      ev.preventDefault();
    const data = new FormData();
    data.set("firstname", firstname);
    data.set("lastname", lastname);
    data.set("email", email);
    data.set("arrival", arrival);
    data.set("depature", departure);
    data.set("date", date);
    data.set("problem", problem);
    data.set("solution", solution);
    console.log(files);
    // data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    const response = await fetch("http://localhost:3007/newpost2", {
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

  return (
    <>
      <NavBar />

      {/* boostrap form */}

      <div className="form  d-flex justify-content-center align-items-center bg-white mb-5">
        <div className="div2 w-50 border p-5">
          <form className="">
            {/* Boostrap css */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <input
                id="grid-first-name"
                type="text"
                class="form-control"
                placeholder="Jane"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstname}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Last Name
              </label>
              <input
                id="grid-first-name"
                type="text"
                class="form-control"
                placeholder="Doe"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastname}
              />
            </div>
            <div class="mb-3 ">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                placeholder="asd@gmail.com"
                class="form-control"
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
                Arival time
              </label>
              <input
                id="grid-last-name"
                class="form-control"
                type="time"
                onChange={(e) => {
                  setArrival(e.target.value);
                }}
                value={arrival}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Departure time
              </label>
              <input
                id="grid-last-name"
                class="form-control"
                type="time"
                onChange={(e) => {
                  setDepature(e.target.value);
                }}
                value={departure}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Date
              </label>
              <input
                id="grid-last-name"
                class="form-control"
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>

            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">
                Problem
              </label>
              <textarea
                id="grid-last-name"
                type="text"
                class="form-control"
                onChange={(e) => {
                  setProblem(e.target.value);
                }}
                value={problem}
              />
            </div>

            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">
                Upload Image
              </label>
              <input
                type="file"
                class="form-control"
                onChange={(ev) => setFiles(ev.target.files)}
              />
            </div>

            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">
                Solution
              </label>
              <textarea
                type="text"
                class="form-control"
                onChange={(e) => {
                  setSolution(e.target.value);
                }}
                value={solution}
              />
            </div>

            <div class="d-flex justify-content-center mb-5">
              <Link to={"/visitorhome"}>
                <button
                  type="submit"
                  class="btn1 btn-success px-5 "
                  onClick={CreateReport}
                >
                  Submit
                </button>
              </Link>
              <Link to={"/visitorhome"}>
                <button type="cancel" class="btn2 btn-danger ms-5 px-5 ">
                  cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FieldReport;
