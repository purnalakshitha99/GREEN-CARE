import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DoctorCards.css";


function DoctorCards() {

  const [totalRequests, setTotalRequests] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [completedRequests, setCompletedRequests] = useState(0);

  useEffect(() => {
    const fetchRequestsCount = async () => {
      try {
        const total = await axios.get("http://localhost:3007/api/v1/animal-form/request-count/total");
        setTotalRequests(total.data.count);
      } catch (error) {
        console.error(error);
      }
      try {
        const pending = await axios.get("http://localhost:3007/api/v1/animal-form/request-count/Pending");
        setPendingRequests(pending.data.count);
      } catch (error) {
        console.error(error);
      }
      try {
        const completed = await axios.get("http://localhost:3007/api/v1/animal-form/request-count/Completed");
        setCompletedRequests(completed.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequestsCount();
  }, []);
 

  return (
    <section class="statistics mt-4">
    <div class="row">
      <div class="col-lg-4">
        <div class="box d-flex rounded-5 align-items-center mb-4 mb-lg-0 p-3">
          <i class="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">{totalRequests}</h3> <span class="d-block ms-2">Total Requests</span>
            </div>
            <p class="fs-normal mb-0">Check the total requests from here</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box d-flex rounded-5 align-items-center mb-4 mb-lg-0 p-3">
          <i class="uil-file fs-2 text-center bg-danger rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">{pendingRequests}</h3> <span class="d-block ms-2">Pending Requests</span>
            </div>
            <p class="fs-normal mb-0">Check the pending requests from here</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="box d-flex rounded-5 align-items-center p-3">
          <i class="uil-users-alt fs-2 text-center bg-success rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">{completedRequests}</h3> <span class="d-block ms-2">Completed Requests</span>
            </div>
            <p class="fs-normal mb-0">Check the completed requests from here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default DoctorCards;
