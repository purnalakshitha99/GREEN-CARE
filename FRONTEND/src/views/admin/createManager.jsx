import React from "react";
import { useState, useEffect } from "react";
import SoloAlert from "soloalert";

import axios from "axios";
// import RetrieveStock from "./retrieveStock";

export default function CreateStocks() {
  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [empNum, setNum] = useState("");
  const [password, setPasssword] = useState("");

  async function submitData(e) {
    alert("insert data");
    setLoading(true);
    try {
      e.preventDefault();
      const newDetails1 = {
        name,
        empNum,
        password,
      };
      // console.log(newDetails1);
      if (!name || !empNum || !password) {
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
          empNum,
          password,
        };
        console.log(newDetails);
        const data = await (
          await axios.post(
            "http://localhost:3007/api/v1/manager/manager/",
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
            Add Managers
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
                    Add Managers
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
                        name
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
                        empNum
                      </label>
                      <div class="col-sm-3">
                        <input
                          type="text"
                          class="form-control"
                          id="inputEmail3"
                          required
                          onChange={(e) => {
                            setNum(e.target.value);
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
                        {/* {isLoading ? "Sending.." : "Submit"} */}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            class="shadow-lg p-1 mb-3 bg-body rounded"
            style={{ width: "120%", alignItems: "center" }}
          >
            <RetrieveStock />
          </div> */}
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
