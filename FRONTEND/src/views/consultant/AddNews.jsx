import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import SoloAlert from "soloalert";

const AddNews = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const findFormErrors = () => {
    const { title, description, image } = form;
    const newErrors = {};

    if (!title || title === "") {
      newErrors.title = "Title cannot be blank!";
    } else if (title.length > 30) {
      newErrors.title = "Title must be maximum 30 characters!";
    }

    if (!description || description === "") {
      newErrors.description = "Description cannot be blank";
    } else if (description.length > 300) {
      newErrors.description = "Description must be maximum 300 characters!";
    }

    if (!image || image === "") {
      newErrors.image = "Please select an image!";
    }

    return newErrors;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setField("image", file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("image", form.image);

      try {
        const response = await axios.post(
          "http://localhost:3007/api/v1/news/add/",
          formData
        );

        if (response.status === 201) {
          SoloAlert.alert({
            title: "Success!",
            body: "News added successfully",
            icon: "success",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
          navigate("/news");
          setIsLoading(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <div className="version-controller">
        <div className="mt-5">
        <h1 className="text-dark mb-4" style={{ fontSize: "3rem" }}>Add News</h1>

        <hr style={{ marginBottom: '20px' }} />

        </div>
        <Form>
          <Form.Group className="form-group row mb-3">
            <Form.Label className="col-3">Title *</Form.Label>
            <div className="col-9">
              <Form.Control
                type="text"
                onChange={(e) => setField("title", e.target.value)}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="form-group row mb-3">
            <Form.Label className="col-3">Description *</Form.Label>
            <div className="col-9">
            <Form.Control
                type="text"
                style={{ height: "100px" }}  // height adjestment
                onChange={(e) => setField("description", e.target.value)}
                isInvalid={!!errors.description}
              />

              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group className="form-group row mb-3">
            <Form.Label className="col-3">Image *</Form.Label>
            <div className="col-9">
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                isInvalid={!!errors.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <div className="text-end">
            <Button style={{color: "red"}} variant="danger" >Cancel</Button>

            <Button
              disabled={isLoading}
              style={{ margin: "5px" ,color: "#45a692"  }}
              variant="success"
              onClick={(e) => handleSubmit(e)}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddNews;
