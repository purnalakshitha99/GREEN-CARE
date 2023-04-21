import React from "react";
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";
import RetrieveSupplier from "./retrieveSupplier";

import axios from "axios";

export default function CreateSupplier() {
  const [isLoading, setLoading] = useState(false);
  const [companyName, setName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [category, setCategory] = useState("");

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
        companyName,
        location,
        email,
        tel,
        category,
      };
      if (tel.length > 10 || tel.length < 10) {
        //if(!S+@S+.S+.test(telephone){}
        alert("Numbers must be 10 characters");
        return;
      }
      // console.log(newDetails1);
      if (!companyName || !location || !email || !tel || !category) {
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
          companyName,
          location,
          email,
          tel,
          category,
        };
        console.log(newDetails);
        const data = await (
          await axios.post(
            "http://localhost:3007/api/v1/supplier/supplier/",
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
            Add supplier
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
                    add supplier
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
                        company name
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
                        for="inputItemName"
                        class="col-sm-2 col-form-label"
                      >
                        Tel
                      </label>
                      <div class="col-sm-6" style={{ height: 20 }}>
                        <input
                          type="text"
                          class="form-control"
                          style={{ height: 32 }}
                          id="tel"
                          required
                          onChange={(e) => {
                            setTel(e.target.value);
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
                          required
                          onChange={(e) => {
                            setLocation(e.target.value);
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
                          required
                          onChange={(e) => {
                            setEmail(e.target.value);
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
            <RetrieveSupplier />
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
