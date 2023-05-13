
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../layouts/navbar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const FarmerProfile = () => {
  return (
    <>
<div class="container mt-2" >
  <div class="row">
    <div class="col">
      <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="/farmer/profile">User</a></li>
          <li class="breadcrumb-item active" aria-current="page">User Profile</li>
        </ol>
      </nav>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-4 ">
      <div class="card mb-4">
        <div class="card-body text-center">
          <img src="https://st3.depositphotos.com/33821012/36116/v/600/depositphotos_361167924-stock-illustration-farmer-standing-with-shovel.jpg" alt="avatar"
            class="rounded-circle img-fluid width: 150px;"/>
          <h5 class="my-3">John Smith</h5>
          <p class="text-muted mb-1">Full Stack Developer</p>
          <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-body">
          <div class="row mt-10 mb-10 ml-10" >
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">Johnatan Smith</p>
            </div>
          </div>
          <hr/>
          <div class="row mt-10 mb-10 ml-10">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">example@example.com</p>
            </div>
          </div>
          <hr/>
          <div class="row mt-10 mb-10 ml-10">
            <div class="col-sm-3">
              <p class="mb-0">Phone</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">(097) 234-5678</p>
            </div>
          </div>
          <hr/>
          <div class="row mt-10 mb-10 ml-10">
            <div class="col-sm-3">
              <p class="mb-0">Mobile</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">(098) 765-4321</p>
            </div>
          </div>
          <hr/>
          <div class="row mt-10 mb-10 ml-10">
            <div class="col-sm-3">
              <p class="mb-0">Address</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></>
  )
}

export default FarmerProfile
