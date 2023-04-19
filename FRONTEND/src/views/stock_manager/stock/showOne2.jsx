import React, { useState, useEffect } from "react";
import SoloAlert from "soloalert";
import { useParams } from "react-router";
import axios from "axios";

export default function ShowItems2() {
  const [isLoading, setLoading] = useState(false);

  const [textState, setTextState] = useState(true);
  const [btngrpState1, setBtnGroupstate1] = useState(true);
  const [btngrpState2, setBtnGroupstate2] = useState(false);

  const [loaderStatus, setLoaderStatus] = useState(false);
  const [tebleStatus, setTableStatus] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [exp, setExp] = useState("");
  const [mfd, setMfd] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const { id } = useParams();

  //This useEffect function used to get all user's data
  useEffect(() => {
    async function getDetails() {
      try {
        const result = await (
          await axios.get(
            `http://localhost:3007/api/v1/stock-manager/item/${id}`
          )
        ).data.data;
        setName(result[0].name);
        setDescription(result[0].descriptioin);
        setPrice(result[0].price);
        setExp(result[0].exp);
        setMfd(result[0].mfd);
        setCategory(result[0].category);
        setQuantity(result[0].quantity);

        setLoaderStatus(true);
        setTableStatus(false);
        console.log(name, description);
      } catch (err) {
        console.log(err.message);
      }
    }

    getDetails();
  }, []);

  async function updateData(e) {
    try {
      e.preventDefault();
      const newDetails = {
        name,
        description,
        price,
        exp,
        mfd,
        category,
        quantity,
      };
      const data = await (
        await axios.put(
          `http://localhost:3007/api/v1/stock-manager/item/${id}`,
          newDetails
        )
      ).status;
      if (data === 200) {
        SoloAlert.alert({
          title: "Welcome!",
          body: "Details added successfully",
          icon: "success",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      } else {
        SoloAlert.alert({
          title: "Oops!",
          body: "Something went wrong.. plz try again later",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      }
    } catch (err) {}
  }

  function edit(e) {
    e.preventDefault();
    setTextState(false);
    setBtnGroupstate1(false);
    setBtnGroupstate2(true);
  }

  function cancel(e) {
    e.preventDefault();
    setTextState(true);
    setBtnGroupstate1(true);
    setBtnGroupstate2(false);
  }

  //This function is used to delete specific user
  function deleteUser(e) {
    e.preventDefault();

    SoloAlert.confirm({
      title: "Confirm Delete",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
        try {
          const result = await (
            await axios.delete(
              `http://localhost:3007/api/v1/stock-manager/item/${id}`
            )
          ).status;
          console.log(result);

          if (result === 200) {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Deletion is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/retrieve";
              },
            });
          }
        } catch (err) {
          SoloAlert.alert({
            title: "Oops!",
            body: "Something went wrong",
            icon: "error",
            theme: "dark",
            useTransparency: true,
            onOk: function () {},
          });
        }
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }
  return (
    <div class="content">
      <div class="d-flex justify-content-center">
        <div
          class="spinner-border"
          role="status"
          style={{ width: "10rem", height: "10rem" }}
          hidden={loaderStatus}
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div hidden={tebleStatus}>
        <h3>ADD-SERVICE-DETAILS</h3>
        <hr />
        <form class="row g-3 needs-validation" id="inputForm2" novalidate>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip01" class="form-label">
              {" "}
              name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip01"
              required
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={textState}
            />
          </div>
          <div class="col-md-5 position-relative">
            <label for="validationTooltip02" class="form-label">
              description
            </label>
            <input
              type="text"
              class="form-control"
              id="validationTooltip02"
              required
              defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              disabled={textState}
            />
          </div>
          <br />
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              price
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTooltip03"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              defaultValue={price}
              disabled={textState}
            />
          </div>
          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              exp
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTooltip03"
              required
              onChange={(e) => {
                setExp(e.target.value);
              }}
              defaultValue={exp}
              disabled={textState}
            />
          </div>

          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              mfd
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTooltip03"
              required
              onChange={(e) => {
                setMfd(e.target.value);
              }}
              defaultValue={mfd}
              disabled={textState}
            />
          </div>
          <div class="col-md-5 position-relative">
            <label for="validationTooltip04" class="form-label">
              Category
            </label>
            <select
              class="form-select"
              id="validationTooltip04"
              required
              disabled={textState}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option selected disabled>
                {category}
              </option>
              <option>fertilizer</option>
              <option>Farm animal foods</option>
              <option>plant & seeds</option>
              <option>Pesticides</option>
            </select>
          </div>

          <div class="col-md-6 position-relative">
            <label for="validationTooltip03" class="form-label">
              quantity
            </label>
            <input
              type="number"
              class="form-control"
              id="validationTooltip03"
              required
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              defaultValue={quantity}
              disabled={textState}
            />
          </div>

          <div
            class="col-12"
            id="btngrp"
            hidden={btngrpState1}
            style={{ marginTop: "5%" }}
          >
            <button class="btn btn-secondary">
              <i
                class="fa fa-ban"
                onClick={(e) => {
                  cancel(e);
                }}
              ></i>{" "}
              CANCEL
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => {
                updateData(e);
              }}
              disabled={isLoading}
            >
              <i class="fa fa-file-export"></i>{" "}
              {isLoading ? "Updating..." : "UPDATE"}
            </button>
          </div>
          <div
            class="col-12"
            id="btngrp"
            hidden={btngrpState2}
            style={{ marginTop: "5%" }}
          >
            <button
              type="submit"
              class="btn btn-primary"
              onClick={(e) => {
                edit(e);
              }}
            >
              {" "}
              <i className="far fa-edit"></i> EDIT
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              class="btn btn-danger"
              onClick={(e) => {
                deleteUser(e);
              }}
            >
              <i class="fa fa-trash"></i> DELETE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
