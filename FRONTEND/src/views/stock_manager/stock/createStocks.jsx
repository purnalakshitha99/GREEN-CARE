import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StockManagerTopNav from "../../../layouts/stockManagerTopNav.jsx";
import StockManagerLeftNav from "../../../layouts/stockManagerLeftNav.jsx";

export default function createStocks() {
  return (
    <div className="container">
      <div>
        <StockManagerTopNav />
      </div>

      <div>
        <StockManagerLeftNav />
      </div>

      <form>
        <div class="row mb-3">
          <label for="addItems" class="col-form-label ">
            Add Items
          </label>
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Item Name
          </label>
          <div class="col-sm-6">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputCategory" class="col-sm-2 col-form-label">
            Select Category
          </label>
          <div class="col-sm-6">
            <select className="form-select form-select-sm mb-3">
              <option value="fertilizer">Select Category</option>
              <option value="fertilizer">fertilizer</option>
              <option value="saab">Farm animal foods</option>
              <option value="opel">plant & seeds</option>
              <option value="audi">Pesticides</option>
            </select>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEXP" class="col-sm-2 col-form-label">
            EXP
          </label>

          <div class="col-sm-10">
            <input type="date" id="exp" name="exp" />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputMFD" class="col-sm-2 col-form-label">
            MFD
          </label>

          <div class="col-sm-10">
            <input type="date" id="MFD" name="exp" />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Quantity
          </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" id="inputQuantity" />
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
              <option value="saab">Farm animal foods</option>
              <option value="opel">plant & seeds</option>
              <option value="audi">Pesticides</option>
            </select>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputItemName" class="col-sm-2 col-form-label">
            Price
          </label>
          <div class="col-sm-2">
            <input type="number" class="form-control" id="inputEmail3" />
          </div>
        </div>

        <div className="align-center">
          <button type="button" class="btn btn-outline-success">
            Success
          </button>
        </div>
      </form>
    </div>
  );
}
