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
    <div
      class="shadow-lg p-1 mb-3 bg-body rounded"
      style={{ width: "80%", alignItems: "center" }}
    >
      <form>
        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Item Name
          </label>
          <div class="col-sm-6" style={{ height: 20 }}>
            <input
              type="text"
              class="form-control"
              style={{ height: 32 }}
              id="name"
              name="name"
              value={items.name}
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

        <div class="row mb-3">
          <label for="inputEXP" class="col-sm-2 col-form-label">
            EXP
          </label>

          <div class="col-sm-10">
            <input
              type="date"
              id="exp"
              name="exp"
              style={{ borderradius: 0.25 }}
              value={items.exp}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputMFD" class="col-sm-2 col-form-label">
            MFD
          </label>

          <div class="col-sm-10">
            <input
              type="date"
              id="MFD"
              name="mfd"
              value={items.mfd}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Quantity
          </label>
          <div class="col-sm-2">
            <input
              type="number"
              class="form-control"
              id="inputQuantity"
              style={{ height: 32 }}
              name="quantity"
              value={items.quantity}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputDescription" class="col-sm-2 col-form-label">
            Description
          </label>
          <div class="col-sm-6">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                name="description"
                value={items.description}
                onChange={(e) => {
                  handleInputChange(e);
                }}
              ></textarea>
              <label for="floatingTextarea2">Description</label>
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Input Image
          </label>
          <div class="col-sm-2">
            <input type="file" id="img" name="img" accept="image/*" />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputSupplier" class="col-sm-2 col-form-label">
            Select Supplier
          </label>
          <div class="col-sm-6">
            <select className="form-select form-select-sm mb-3">
              <option value="fertilizer">Select Supplier</option>
              <option value="fertilizer">fertilizer</option>
              <option value="farmAnimal">Farm animal foods</option>
              <option value="plant">plant & seeds</option>
              <option value="pesticides">Pesticides</option>
            </select>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Price
          </label>
          <div class="col-sm-3">
            <input
              type="number"
              class="form-control"
              id="price"
              name="price"
              value={items.price}
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
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
