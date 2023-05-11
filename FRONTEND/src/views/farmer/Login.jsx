import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const[animal, setAnimal] = useState("");

  const loginInformation = (e) => {
    e.preventDefault();
    alert("hi")
    const farmerdoc = {
      email: email,
      password: password,
      // animal: animal,
    };
    alert("hi mama alert")
    axios
      .post('http://localhost:3007/api/v1/login', farmerdoc)
      .then((res) => {
        if (res.data.message === 'success') {
          alert("hi mama success alert ek")
          Swal.fire('Good job!', 'You clicked the button!', 'success');
        } else {
          alert("hi mama fail alert ek")
          console.log('error');
        }
      })
      .catch((error) => {
        try {
          console.log(error);
          alert("hi mama try alert ek")

        } catch (error) {
          alert("hi mama catch alert ek")

          console.log('error');
        }
      });
  };

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

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={loginInformation}
                      >
                        Login
                      </button>
                    </div>
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

export default LoginUser;
