import React from "react";
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";

import axios from "axios";
import RetrieveStock from "./retrieveStock";

export default function CreateStocks() {
  const today = new Date().toISOString().split("T")[0];

  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [exp, setEXP] = useState("");
  const [mfd, setMFD] = useState("");

  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  // function submitData(e) {
  //   e.preventDefault();
  //   setLoading(true);

  //   const newDetails = {
  //     name,
  //     description,
  //     price,
  //     exp,
  //     mfd,
  //     category,
  //     quantity,
  //   };

  //   console.log(newDetails);
  // }

  async function submitData(e) {
    alert("insert data");
    setLoading(true);
    try {
      e.preventDefault();
      const newDetails1 = {
        name,
        description,
        price,
        exp,
        mfd,
        category,
        quantity,
      };
      // console.log(newDetails1);
      if (
        !name ||
        !description ||
        !price ||
        !exp ||
        !mfd ||
        !category ||
        !quantity
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
          name,
          description,
          price,
          exp,
          mfd,
          category,
          quantity,
        };
        console.log(newDetails);
        const data = await (
          await axios.post(
            "http://localhost:3007/api/v1/stock-manager/item/",
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
            Add Items
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
                    Add Items
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
                        for="inputItemName"
                        class="col-sm-2 col-form-label"
                      >
                        Item Name
                      </label>
                      <div class="col-sm-6" style={{ height: 20 }}>
                        <input
                          type="text"
                          class="form-control"
                          style={{ height: 32 }}
                          id="inputItemName"
                          required
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label
                        for="inputCategory"
                        class="col-sm-2 col-form-label"
                      >
                        Select Category
                      </label>
                      <div class="col-sm-6">
                        <select
                          className="form-select form-select-sm mb-3"
                          required
                          onChange={(e) => {
                            setCategory(e.target.value);
                          }}
                        >
                          <option value="fertilizer">Select Category</option>
                          <option value="fertilizer">fertilizer</option>
                          <option value="FarmAnimalFoods">
                            Farm animal foods
                          </option>
                          <option value="plantAndSeeds">plant & seeds</option>
                          <option value="Pesticides">Pesticides</option>
                        </select>
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
                          name="exp"
                          required
                          onChange={(e) => {
                            setMFD(e.target.value);
                          }}
                        />
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
                          required
                          min={mfd}
                          onChange={(e) => {
                            setEXP(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="inputItemName"
                        class="col-sm-2 col-form-label"
                      >
                        Quantity
                      </label>
                      <div class="col-sm-2">
                        <input
                          type="number"
                          class="form-control"
                          id="inputQuantity"
                          style={{ height: 32 }}
                          required
                          onChange={(e) => {
                            setQuantity(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="inputDescription"
                        class="col-sm-2 col-form-label"
                      >
                        Description
                      </label>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <textarea
                            class="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            required
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          ></textarea>
                          <label for="floatingTextarea2">Description</label>
                        </div>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="inputItemName"
                        class="col-sm-2 col-form-label"
                      >
                        Input Image
                      </label>
                      <div class="col-sm-2">
                        <input
                          type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="inputSupplier"
                        class="col-sm-2 col-form-label"
                      >
                        Select Supplier
                      </label>
                      <div class="col-sm-6">
                        <select className="form-select form-select-sm mb-3">
                          <option value="fertilizer">Lak Super</option>
                          <option value="fertilizer">Green Crops pvt.</option>
                          <option value="farmAnimal">
                            Super-Center-Malabe
                          </option>
                          <option value="plant">City Store-Kaduwela</option>
                          <option value="pesticides">Ajantha Super</option>
                        </select>
                      </div>
                    </div>

                    <div class="row mb-3">
                      <label
                        for="inputItemName"
                        class="col-sm-2 col-form-label"
                      >
                        Price
                      </label>
                      <div class="col-sm-3">
                        <input
                          type="number"
                          class="form-control"
                          id="inputEmail3"
                          required
                          onChange={(e) => {
                            setPrice(e.target.value);
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
          <div
            class="shadow-lg p-1 mb-3 bg-body rounded"
            style={{ width: "120%", alignItems: "center" }}
          >
            <RetrieveStock />
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={items.name}
            onChange={handleInputChange}
          />
        </div> */
}
