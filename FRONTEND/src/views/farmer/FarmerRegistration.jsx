
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
          window.location.href = 'http://localhost:3000/login';
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


  // const handleNameChange = (e) => {
  //   const inputValue = e.target.value;
  //   const pattern = /^[A-Za-z]+$/;
  //   if (pattern.test(inputValue) || inputValue === '') {
  //     setName(inputValue);
  //   }
  // };

  return (
    <>
      <div
        class="mask d-flex align-items-center h-100 gradient-custom-3"
        className="mainRegDiv"
      >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Register With Your Details
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example1cg">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                       {/* <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={handleNameChange}
                      /> */}
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg">
                        Your Address
                      </label>
                      <input
                        type="text"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cdg">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      {/* <input
                        type="number"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        maxLength={10}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 10);
                          setPhone(e.target.value);
                        }}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      /> */}
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{' '}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={farmerinformation}
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{' '}
                      <a href="/login" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertFarmerInformation;
