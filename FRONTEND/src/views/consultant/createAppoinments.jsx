import React from "react"; //this farmer view
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";
// import Side_nav from "../../layouts/side_nav.jsx";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default function CreateAppoinment() {
  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { topic, description, date, farmer_name } = form;
    const newErrors = {};
    // Topic errors
    if (!topic || topic === "") newErrors.topic = "topic cannot be blank!";
    else if (topic.length > 30) newErrors.topic = "topic is too long!";
    // Description errors
    if (!description || description === "")
      newErrors.description = "description cannot be blank";
    else if (description.length > 300)
      newErrors.description = "description is too long!";

    // Farmer Name errors
    if (!farmer_name || farmer_name === "")
      newErrors.farmer_name = "cannot be blank!";
    else if (farmer_name.length > 100)
      newErrors.farmer_name = "comment is too long!";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors!
      const data = (
        await axios.post(
          "http://localhost:3007/api/v1/appointment/appointment/",
          form
        )
      ).status;
      console.log(data);
      if (data === 201) {
        SoloAlert.alert({
          title: "Success!",
          body: "Appointment added successfully",
          icon: "success",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      }
    }
  };

  function clear() {}

  return (
    <div>
      <div 
      style={{ 
        backgroundImage: `url('https://teara.govt.nz/files/p16937pc.jpg')`, // replace 'your_image_url' with the actual URL of your image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '200px', // adjust this value as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // set the color of the text
        fontSize: '20px' // set the size of the text
      }}
    >
      
    </div>

    Consultation for the Creen Care System is a comprehensive and collaborative process aimed at providing expert advice and guidance to individuals or organizations seeking to implement or improve their screen care practices. The consultation process involves working closely with clients to assess their specific needs, analyze their current screen care practices, and develop tailored strategies and solutions to optimize screen health and longevity.

During the consultation, experienced professionals in the field of screen care will engage with clients to understand their goals, challenges, and desired outcomes. They will conduct a thorough evaluation of the existing screen care infrastructure, including hardware, software, policies, and user habits. This assessment helps identify areas of improvement and potential risks to screen health.
    <div class="row flex-nowrap">
      ...
    </div>
      <div class="row flex-nowrap">
        <div class="col py-5">
          <div class="container d-flex justify-content-center text-center">
            <button
              type="button"
              class="btn btn-primary custom-btn1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ backgroundColor: "#15a891" }}
            >
              Add Appointment
            </button>
          </div>

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
                        Topic *
                      </label>
                      <div class="col-sm-6">
                        <Form.Control
                          type="text"
                          onChange={(e) => setField("topic", e.target.value)}
                          isInvalid={!!errors.topic}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.topic}
                        </Form.Control.Feedback>
                        {/* <input
                          type="text"
                          class="form-control"
                          id="appointmentTopic"
                          required
                          onChange={(e) => {
                            setTopic(e.target.value);
                          }}
                        /> */}
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="appointmentDescription"
                        class="col-sm-2 col-form-label"
                      >
                        Description *
                      </label>
                      <div class="col-sm-6">
                        <Form.Control
                          type="text"
                          as="textarea"
                          rows={3}
                          onChange={(e) =>
                            setField("description", e.target.value)
                          }
                          isInvalid={!!errors.description}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.description}
                        </Form.Control.Feedback>
                      </div>
                    </div>

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
                          defaultValue={new Date().toISOString().substr(0, 10)}
                          min={new Date().toISOString().substr(0, 10)}
                          required
                          onChange={(e) => {
                            setField("date", e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label for="farmerName" class="col-sm-2 col-form-label">
                        Farmer Name *
                      </label>
                      <div class="col-sm-6">
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            setField("farmer_name", e.target.value)
                          }
                          isInvalid={!!errors.farmer_name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.farmer_name}
                        </Form.Control.Feedback>
                      </div>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        style={{color: 'Red'}} 

                        data-bs-dismiss="modal"
                        onClick={(e) => {
                          clear(e);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        class="btn btn-success"
                        style={{color: '#45a692'}} 
                        onClick={(e) => {
                          handleSubmit(e);
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
        </div>
      </div>
    </div>
  );
}