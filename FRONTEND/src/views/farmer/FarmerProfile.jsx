import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../farmer/ALNavbar';
import Footer from './Footer'

const FarmerProfile = () => {
  const email = localStorage.getItem('userEmail');
  console.log(email);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [uid,setUid] = useState('');
  const [category,setCategory] = useState('');

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
        setUid(response.data.user.id);
        setCategory(response.data.user.category);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFarmerProfile();
  }, []); // Empty dependency array to run only once


  const handleDeleteAccount = async () => {
    const confirmed = await Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete your account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    });
  
    if (confirmed.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:3007/api/v1/farmer/${uid}`
        );
        Swal.fire('Success', response.data.message, 'success');
        // You can redirect the user to a different page after successful deletion
        navigate('/login');
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error');
      }
    }
  };
  

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
                <div
                  class="row "
                  style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '20px',
                  }}
                >
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{name}</p>
                  </div>
                </div>
                <hr />
                <div
                  class="row mt-10 mb-10 ml-10"
                  style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '20px',
                  }}
                >
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{email}</p>
                  </div>
                </div>
                <hr />
                <div
                  class="row mt-10 mb-10 ml-10"
                  style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '20px',
                  }}
                >
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{phone}</p>
                  </div>
                </div>
                <hr />
                <div
                  class="row "
                  style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '20px',
                  }}
                >
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{address}</p>
                  </div>
                </div>
                <hr />
                <div
                  class="row "
                  style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                    marginLeft: '20px',
                  }}
                >
                  <div class="col-sm-3">
                    <p class="mb-0">Bio</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{category}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row"
              style={{ marginTop: '30px', marginBottom: '30px' }}
            >
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Address actions"
                >
                  <button
                    type="button"
                    class="btn btn-success text-white"
                    onClick={() =>
                      (window.location.href = 'http://localhost:3000/farmer/profile/update')
                    }
                    // type="submit"
                  >
                    Edit profile
                  </button>
                  <button
                    type="button"
                    class="btn btn-dark text-white"
                    style={{ marginLeft: '60px' }}
                    onClick={handleDeleteAccount}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default FarmerProfile;
