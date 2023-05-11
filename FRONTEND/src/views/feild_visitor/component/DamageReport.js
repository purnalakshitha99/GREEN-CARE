import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../../layouts/navbar";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

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
  return (
    <>
      <NavBar />
      <form className=" justify-center flex  mt-[150px]">
        <div class="w-full max-w-lg p-2 rounded-xl shadow-lg mb-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide  text-xs font-bold mb-2 rounde"
                // border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex  mb-2 shadow-md
                for="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                required
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                value={fullname}
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
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
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone number
            </label>
            <input
              className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-3 px-4 mb-3 leading-tight "
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phonenumber}
            />
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
                  setD_Arrival(e.target.value);
                }}
                value={d_arrival}
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
                  setD_Depature(e.target.value);
                }}
                value={d_departure}
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
                Dmage Details
              </label>
              <textarea
                className="frmname appearance-none block w-full border-gray-300 border-2 rounded-xl py-5 px-4 mb-3 leading-tight "
                type="text"
                onChange={(e) => {
                  setDamagedetails(e.target.value);
                }}
                value={damagedetails}
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
