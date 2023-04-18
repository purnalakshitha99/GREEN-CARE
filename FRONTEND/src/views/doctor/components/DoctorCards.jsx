import React, { useState } from "react";
import "./DoctorCards.css";
import { MDBIcon } from "mdbreact";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBBadge,
  MDBCardBody,
  MDBBtn,
  MDBCardFooter,
} from "mdb-react-ui-kit";
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
    <MDBContainer>
      <MDBRow className="gy-4">
        <MDBCol md="4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <MDBBadge color="primary" className="rounded-pill px-3 py-2">
                  Total Requests
                </MDBBadge>
                <MDBIcon
                  icon="list-alt"
                  size="2x"
                  className="text-primary"
                />
              </div>
              <div className="text-center mt-3">
                <span className="fs-1">{totalRequests.length}</span>
              </div>
            </MDBCardBody>
            <MDBCardFooter className="bg-white border-0">
              <MDBBtn
                color="primary"
                className="w-100"
                onClick={showTotalRequestsModal}
              >
                View Details
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <MDBBadge color="warning" className="rounded-pill px-3 py-2">
                  Pending Requests
                </MDBBadge>
                <MDBIcon
                  icon="hourglass-half"
                  size="2x"
                  className="text-warning"
                />
              </div>
              <div className="text-center mt-3">
                <span className="fs-1">{pendingRequests.length}</span>
              </div>
            </MDBCardBody>
            <MDBCardFooter className="bg-white border-0">
              <MDBBtn
                color="warning"
                className="w-100"
                onClick={showPendingRequestsModal}
              >
                View Details
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="h-100">
            <MDBCardBody>
              <div className="d-flex justify-content-between align-items-center">
                <MDBBadge color="success" className="rounded-pill px-3 py-2">
                  Completed Requests
                </MDBBadge>
                <MDBIcon
                  icon="check-circle"
                  size="2x"
                  className="text-success"
                />
              </div>
              <div className="text-center mt-3">
                <span className="fs-1">{completedRequests.length}</span>
              </div>
            </MDBCardBody>
            <MDBCardFooter className="bg-white border-0">
              <MDBBtn
                color="success"
                className="w-100"
                onClick={showCompletedRequestsModal}
              >
                View Details
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <TotalRequestsModal
        isOpen={totalRequestsModalShown}
        onRequestClose={hideTotalRequestsModal}
        totalRequests={totalRequests}
      />

      <PendingRequestsModal
        isOpen={pendingRequestsModalShown}
        onRequestClose={hidePendingRequestsModal}
        pendingRequests={pendingRequests}
      />

      <CompletedRequestsModal
        isOpen={completedRequestsModalShown}
        onRequestClose={hideCompletedRequestsModal}
        completedRequests={completedRequests}
      />
    </MDBContainer>
  );
}

export default DoctorCards;
