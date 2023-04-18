import React from 'react';
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from 'mdb-react-ui-kit';

function TotalRequestsModal(props) {
  return (
    <MDBModal show={props.isOpen} onHide={props.onRequestClose}>
      <MDBModalHeader>
        Total Requests
      </MDBModalHeader>
      <MDBModalBody>
        <ul>
          {props.totalRequests.map((request, index) => (
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

export default TotalRequestsModal;