import React, { useState } from "react";
import "./DoctorCards.css";


function DoctorCards() {
 

  return (
    <section class="statistics mt-4">
    <div class="row">
      <div class="col-lg-4">
        <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
          <i class="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">25</h3> <span class="d-block ms-2">Total Requests</span>
            </div>
            <p class="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
          <i class="uil-file fs-2 text-center bg-danger rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">10</h3> <span class="d-block ms-2">Pending Requests</span>
            </div>
            <p class="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box d-flex rounded-2 align-items-center p-3">
          <i class="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">15</h3> <span class="d-block ms-2">Total Requests</span>
            </div>
            <p class="fs-normal mb-0">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default DoctorCards;
