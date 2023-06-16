import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../layouts/navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const DamageReport = () => {
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
  // async function CreateReport(ev) {
  //   ev.preventDefault();
  //   const data = new FormData();
  //   data.set("firstname", firstname);
  //   data.set("lastname", lastname);
  //   data.set("email", email);
  //   data.set("arrival", arrival);
  //   data.set("depature", departure);
  //   data.set("date", date);
  //   data.set("problem", problem);
  //   data.set("solution", solution);
  //   console.log(files);
  //   // data.set("id", id);
  //   if (files?.[0]) {
  //     data.set("file", files?.[0]);
  //   }
  //   const response = await fetch("http://localhost:3007/newpost", {
  //     method: "POST",

  //     body: data,
  //   });
  //   if (response.status === 400) {
  //     // toast.success("fiels are empty ");
  //   } else if (response.status === 201) {
  //     // toast.success("Resource update successfully");
  //     // setTimeout(() => {
  //     //   setRedirect(true);
  //     // }, 1000);
  //   } else {
  //     //toast.error("Server error");
  //   }
  // }

  return (
    <>
      <NavBar />
      <form className=" justify-center flex  mt-[150px]">
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
      </form>
    </>
  );
};

export default DamageReport;
