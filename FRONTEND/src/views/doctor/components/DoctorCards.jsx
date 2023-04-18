import React, { useState } from "react";
import "./DoctorCards.css";

import TotalRequestsModal from "./TotalRequestsModal";
import PendingRequestsModal from "./PendingRequestsModal";
import CompletedRequestsModal from "./CompletedRequestsModal";

function DoctorCards() {
  const [totalRequestsModalShown, setTotalRequestsModalShown] = useState(false);
  const [pendingRequestsModalShown, setPendingRequestsModalShown] = useState(false);
  const [completedRequestsModalShown, setCompletedRequestsModalShown] = useState(false);

  const totalRequests = ["Request 1", "Request 2", "Request 3"]; // replace with actual data
  const pendingRequests = ["Request 4", "Request 5", "Request 6"]; // replace with actual data
  const completedRequests = ["Request 7", "Request 8", "Request 9"]; // replace with actual data

  const showTotalRequestsModal = () => setTotalRequestsModalShown(true);
  const hideTotalRequestsModal = () => setTotalRequestsModalShown(false);
  const showPendingRequestsModal = () => setPendingRequestsModalShown(true);
  const hidePendingRequestsModal = () => setPendingRequestsModalShown(false);
  const showCompletedRequestsModal = () => setCompletedRequestsModalShown(true);
  const hideCompletedRequestsModal = () => setCompletedRequestsModalShown(false);

  return (
    <section class="statistics mt-4">
    <div class="row">
      <div class="col-lg-4">
        <div class="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
          <i class="uil-envelope-shield fs-2 text-center bg-primary rounded-circle"></i>
          <div class="ms-3">
            <div class="d-flex align-items-center">
              <h3 class="mb-0">1,245</h3> <span class="d-block ms-2">Emails</span>
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
              <h3 class="mb-0">34</h3> <span class="d-block ms-2">Projects</span>
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
              <h3 class="mb-0">5,245</h3> <span class="d-block ms-2">Users</span>
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
