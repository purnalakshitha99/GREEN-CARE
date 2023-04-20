import React from "react";
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";
// import Side_nav from "../../layouts/side_nav.jsx";
import axios from "axios";

const AppointmentsBox = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3007/api/v1/appointment/appointment/');
        setAppointments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      {appointments.map((appointment) => (
        <div key={appointment._id}>
          <p>Topic: {appointment.topic}</p>
          <p>Description: {appointment.description}</p>
          <p>Reply: {appointment.reply}</p>
          <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
          <p>Approval: {appointment.approvel ? 'Approved' : 'Not approved'}</p>
          <p>Farmer Name: {appointment.farmer_name}</p>
        </div>
      ))}
    </div>
  );
};
export default AppointmentsBox;
