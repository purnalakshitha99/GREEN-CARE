import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const farmerinformation = (e) => {
    e.preventDefault();

    const farmerdoc = {
      email: email,
      password: password,
      // animal: animal,
    };

    axios
      .post('http://localhost:3007/api/v1/login', farmerdoc)
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
              Login with Credentials
            </h1>

            <label>E-Mail</label>
            <input
              className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
              type="text"
              placeholder="asf@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
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
              Login
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

export default UserLogin;
