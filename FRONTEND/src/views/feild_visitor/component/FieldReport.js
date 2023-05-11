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

  // const CreateReport = () => {
  //   // event.preventDefault();
  //   const reportdoc = {
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     arrival: arrival,
  //     depature: departure,
  //     problem: problem,
  //     solution: solution,
  //   };
  //   console.log(reportdoc);
  //   axios
  //     .post("http://localhost:3007/api/v1/reportcreate/reportgen", reportdoc)
  //     .then((res) => {
  //       if (res.data.message === "success") {
  //         Swal.fire("Good job!", "You clicked the button!", "success");
  //       } else {
  //         console.log("error");
  //       }
  //     })
  //     .catch((error) => {
  //       try {
  //         console.log(error);
  //       } catch (error) {
  //         console.log("error");
  //       }
  //     });
  // };
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





<div className="bg-slate-100/50 pb-4 md:m-5 md:flex md:ml-[300px] shadow-lg md:w-[800px] ">
        <form className=" mt-5 md:w-full md:px-10 md:m-10">
          <div className="grid grid-cols-2 justify-center md:flex ">
            <div className="px-3 mb-6 md:mb-0">
              <label
                className="block md:w-[300px] first-letter-uppercase text-lg font-semibold mb-1 text-gray-400"
                for="grid-first-name"
              >
                First Name :
              </label>
              <span className="text-sm">{firstname}</span>

              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Last Name :
              </label>
              <span className="text-sm">{lastname}</span>
              <label
                className="block  first-letter-uppercase text-lg font-semibold mb-1 text-gray-400"
                for="grid-first-name"
              >
                E-mail Address:
              </label>
              <span className="text-sm">{email}</span>
            </div>

            <div className="w-full px-3 ">
              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Arrival Time :
              </label>
              <span className="text-sm">{arrival}</span>
              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Departure Time :
              </label>
              <span className="text-sm">{depature}</span>
              <label
                className="block first-letter-uppercase text-lg font-semibold mb-1 rounde text-gray-400"
                for="grid-last-name"
              >
                Date :
              </label>
              <span className="text-sm">{date}</span>
            </div>
          </div>

          <div className=" pb-3">
            <div className="w-full px-3">
              <label className="block  first-letter-uppercase text-lg font-semibold mb-1 text-gray-400">
                Problem
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full  p-2  mb-3 leading-tight "
                type="text"
                value={problem}
              />

              <label className="block uppercase tracking-wide  text-gray-400 font-bold mb-2">
                Solution
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full p-2  mb-3 leading-tight "
                type="text"
                value={solution}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <Link to={"/editreport/"+_id}
              className="btn-primary px-5 m-3"
              // onClick={()=>navigate("/editreport")}
              // onClick={() => navigate("/editreport/"+_id)}
            >
              Edit
            </Link>
            <button className="btn-primary2 m-3 px-5">Delete</button>
          </div>
        </form>
      </div>