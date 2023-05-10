import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const InsertFarmerInformation = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [password, setPassword] = useState('');
  //const[animal, setAnimal] = useState("");

  const farmerinformation = (e) => {
    e.preventDefault();

    const farmerdoc = {
      name: name,
      email: email,
      address: address,
      phone: phonenumber,
      password: password,
      // animal: animal,
    };

    axios
      .post('http://localhost:3007/api/v1/farmer/signup', farmerdoc)
      .then((res) => {
        if (res.data.message === 'success') {
          Swal.fire('Good job!', 'You clicked the button!', 'success');
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        try {
          console.log(error);
        } catch (error) {
          console.log('error');
        }
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className=" bg-slate-300/40 flex justify-center w-[800px] ml-[280px] mt-[150px] shadow-md rounded-xl mb-[50px]">
        {/* isuru */}

        <div className="  justify-center flex  p-4">
          <form>
            <h1 className="ml-[70px] mt- font-bold text-3xl">
              Registrater With Your Details
            </h1>
            <label>Full Name</label>

            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-row mb-2 shadow-md"
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label>E-Mail</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="asf@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Address</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex  mb-2 shadow-md"
              type="text"
              placeholder="eg: No. 123, Galle Road, Colombo 03"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <label>Phone Number</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="number"
              placeholder="+94 - 7654321632"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn-primary shadow-md ml-[150px]"
              onClick={farmerinformation}
              // onClick={()=>navigate("/infotable")}
            >
              Register
            </button>
            <button type="submit" className="btn-primary2 shadow-md ml-10">
              cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InsertFarmerInformation;
