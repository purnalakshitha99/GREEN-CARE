import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowSupplier() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setAllItems] = useState([]);

  useEffect(() => {
    const getItems = () => {
      axios
        .get(`http://localhost:3007/api/v1/supplier/supplier/${id}`)
        .then((res) => {
          setAllItems(res.data.data.items);
          console.log(res.data.data.items);
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
      .patch(`http://localhost:3007/api/v1/supplier/supplier/${id}`, items)
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
            console.log("awaa");
            navigate("/retrieve");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("Not Updated", err.message, "error"));
  };

  return (
    <div
      class="shadow-lg p-1 mb-3 bg-body rounded"
      style={{ width: "80%", alignItems: "center" }}
    >
      <form>
        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Company Name
          </label>
          <div class="col-sm-6" style={{ height: 20 }}>
            <input
              type="text"
              class="form-control"
              style={{ height: 32 }}
              id="companyName"
              name="companyName"
              value={items.companyName}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEXP" class="col-sm-2 col-form-label">
            location
          </label>

          <div class="col-sm-10">
            <input
              type="text"
              id="location"
              name="location"
              style={{ borderradius: 0.25 }}
              value={items.location}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEXP" class="col-sm-2 col-form-label">
            Tel
          </label>

          <div class="col-sm-10">
            <input
              type="text"
              id="tel"
              name="tel"
              style={{ borderradius: 0.25 }}
              value={items.tel}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputMFD" class="col-sm-2 col-form-label">
            email
          </label>

          <div class="col-sm-10">
            <input
              type="email"
              id="email"
              name="email"
              value={items.email}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputCategory" class="col-sm-2 col-form-label">
            Select Category
          </label>
          <div class="col-sm-6">
            <select
              className="form-select form-select-sm mb-3"
              id="category"
              name="category"
              value={items.category}
              onChange={(e) => {
                handleInputChange(e);
              }}
            >
              <option value="fertilizer">Select Category</option>
              <option value="fertilizer">fertilizer</option>
              <option value="FarmAnimalFoods">Farm animal foods</option>
              <option value="plantAndSeeds">plant & seeds</option>
              <option value="Pesticides">Pesticides</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => {
              handleFormSubmit(e);
            }}
          >
            save changes
          </button>
        </div>
      </form>
    </div>
  );
}
