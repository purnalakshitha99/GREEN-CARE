import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../farmer/ALNavbar';

const FarmerProfile = () => {
  const email = localStorage.getItem('userEmail');
  console.log(email);

  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  console.log(name);

  useEffect(() => {
    const fetchFarmerProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/v1/farmer/profile/${email}`
        );
        console.log(response.data.user);
        setName(response.data.user.name);
        setUserEmail(response.data.user.email);
        setPhone(response.data.user.phone);
        setAddress(response.data.user.address);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmerProfile();
  }, []); // Empty dependency array to run only once

  return (
    <>
      <Navbar />
      <div
        style={{ marginTop: '100px', marginBottom: '100px' }}
        class="container"
      >
        <div class="row">
          <div class="col-lg-4 ">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src="https://st3.depositphotos.com/33821012/36116/v/600/depositphotos_361167924-stock-illustration-farmer-standing-with-shovel.jpg"
                  alt="avatar"
                  class="rounded-circle img-fluid width: 150px;"
                />
                <h5 class="my-3">{name}</h5>
                <p class="text-muted mb-1">{email}</p>
                <p class="text-muted mb-4">{address}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row " style={{ marginTop: '30px', marginBottom: '30px', marginLeft:'20px' }}>
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{name}</p>
                  </div>
                </div>
                <hr />
                <div class="row mt-10 mb-10 ml-10" style={{ marginTop: '30px', marginBottom: '30px', marginLeft:'20px' }}>
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{email}</p>
                  </div>
                </div>
                <hr />
                <div class="row mt-10 mb-10 ml-10" style={{ marginTop: '30px', marginBottom: '30px', marginLeft:'20px' }}>
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{phone}</p>
                  </div>
                </div>
                <hr />
                <div class="row " style={{ marginTop: '30px', marginBottom: '30px', marginLeft:'20px' }}>
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmerProfile;
