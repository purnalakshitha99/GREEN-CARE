import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowItems() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setAllItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      axios
        .get(`http://localhost:3007/api/v1/stock-manager/item/${id}`)
        .then((res) => {
          setAllItems(res.data);
          console.log(res.data);
        })
        .catch((err) => alert(err.message));
    };
    getItems();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAllItems((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:3007/api/v1/stock-manager/item/${id}`, items)
      .then(() => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            navigate("/retrieve");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("Not Updated", err.message, "error"));
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={items.name}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="age">description</label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={items.}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <br /> */}
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
