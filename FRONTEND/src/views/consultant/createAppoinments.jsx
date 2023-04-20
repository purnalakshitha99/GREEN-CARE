import React from "react";
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";
// import Side_nav from "../../layouts/side_nav.jsx";
import axios from "axios";

export default function CreateAppoinment() {
  const [isLoading, setLoading] = useState(false);

  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [reply, setReply] = useState("");
  const [date, setDate] = useState("");
  const [approvel, setApprovel] = useState("");

  const [farmer_name, setFname] = useState("");


  async function submitData(e) {
    alert("insert data");
    setLoading(true);
    try {
      e.preventDefault();
      const newDetails1 = {
        topic,
        description,
        reply,
        date,
        approvel,
        farmer_name,
      };
      console.log(newDetails1);
      if (
        !topic ||
        !description ||
        // !reply ||
        !date ||
        // !approvel ||
        !farmer_name
      ) {
        SoloAlert.alert({
          title: "Oops!",
          body: "Please fill all fields",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      } else {
        const newDetails = {
          topic,
          description,
          reply: "None",
          date,
          approvel: false,
          farmer_name,
        };
        console.log(newDetails);
        const data = await (
          await axios.post(
            "http://localhost:3007/api/v1/appointment/appointment/",
            newDetails
          )
        ).status;
        console.log(data);
        if (data === 201) {
          SoloAlert.alert({
            title: "Welcome!",
            body: "Data added successfully",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  function clear() {}

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-5">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            New Appointments
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content" style={{ width: 750 }}>
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Appointment
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  {" "}
                  <form>
                    <div class="row mb-3">
                      <label
                        for="appointmentTopic"
                        class="col-sm-2 col-form-label"
                      >
                        Topic
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="appointmentTopic"
                          required
                          onChange={(e) => {
                            setTopic(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="appointmentDescription"
                        class="col-sm-2 col-form-label"
                      >
                        Description
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="appointmentDescription"
                          style={{ height: 60 }}
                          required
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {/* <div class="row mb-3">
                            <label for="appointmentReply" class="col-sm-2 col-form-label">Reply</label>
                            <div class="col-sm-6">
                              <input type="text" class="form-control" id="appointmentReply" required onChange={(e) => {setReply(e.target.value)}} />
                            </div>
                          </div> */}

                    <div class="row mb-3">
                      <label
                        for="appointmentDate"
                        class="col-sm-2 col-form-label"
                      >
                        Date
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="date"
                          class="form-control"
                          id="appointmentDate"
                          required
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {/* <div class="row mb-3">
                            <label for="appointmentApprovel" class="col-sm-2 col-form-label">Approval</label>
                            <div class="col-sm-6">
                              <input type="checkbox" class="form-check-input" id="appointmentApprovel" onChange={(e) => {setApprovel(e.target.checked)}} />
                            </div>
                          </div> */}

                    <div class="row mb-3">
                      <label for="farmerName" class="col-sm-2 col-form-label">
                        Farmer Name
                      </label>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          id="farmerName"
                          required
                          onChange={(e) => {
                            setFname(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={(e) => {
                          clear(e);
                        }}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={(e) => {
                          submitData(e);
                        }}
                        disabled={isLoading}
                      >
                        <i class="fa fa-file-export"></i>{" "}
                        {isLoading ? "Sending.." : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="shadow-lg p-1 mb-2 bg-body rounded"
            style={{ width: "70%", alignItems: "center" }}
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@ee</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}
