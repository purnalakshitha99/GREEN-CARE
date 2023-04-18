import React from 'react';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdb-react-ui-kit';

function PendingRequestsModal(props) {
  return (
    <MDBModal show={props.isOpen} onHide={props.onRequestClose}>
      <MDBModalHeader>
        Pending Requests
      </MDBModalHeader>
      <MDBModalBody>
        <ul>
          {props.pendingRequests.map((request, index) => (
            <li key={index}>{request}</li>
          ))}
        </ul>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' onClick={props.onRequestClose}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
}

export default PendingRequestsModal;