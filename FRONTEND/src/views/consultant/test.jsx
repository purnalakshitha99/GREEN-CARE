import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleImageChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      image: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("image", inputs.image);
    // formData.append("user", localStorage.getItem("userId"));

    const res = await axios.post("http://localhost:3007/api/v1/news/add/", formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" onChange={handleInputChange} value={inputs.title} />
      </label>
      <label>
        Description:
        <textarea name="description" onChange={handleInputChange} value={inputs.description} />
      </label>
      <label>
        Image:
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;