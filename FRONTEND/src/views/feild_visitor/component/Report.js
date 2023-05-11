import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Report({
  _id,
  firstname,
  lastname,
  email,
  arrival,
  depature,
  problem,
  solution,
  date,
}) {
  // console.log(_id);
  const navigate = useNavigate();
  return (
    <>
      {/* BOOSTRAP form */}

      <div className="form  d-flex justify-content-center align-items-center bg-white mb-5">
        <div className="div2 w-50 border p-5">
          <form className="">
            {/* Boostrap css */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First Name
              </label>
              <span className="text-sm">{firstname}</span>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Last Name
              </label>
              <span className="text-sm">{lastname}</span>
            </div>
            <div class="mb-3 ">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <span className="text-sm">{email}</span>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Arival time
              </label>
              <span className="text-sm">{arrival}</span>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Departure time
              </label>
              <span className="text-sm">{depature}</span>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Date
              </label>
              <span className="text-sm">{date}</span>
            </div>

            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">
                Problem
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full  p-2  mb-3 leading-tight "
                type="text"
                value={problem}
              />
            </div>

            <div class="mb-5">
              <label for="exampleInputEmail1" class="form-label">
                Solution
              </label>
              <textarea
                className="bg-slate-100/50 appearance-none block w-full p-2  mb-3 leading-tight "
                type="text"
                value={solution}
              />
            </div>

            <div class="d-flex justify-content-center mb-5">
              <Link to={"/editreport/" + _id}>
                <button type="submit" class="btn1 btn-success px-5 ">
                  Edit
                </button>
              </Link>
              <Link to={"/visitorhome"}>
                <button type="cancel" class="btn2 btn-danger ms-5 px-5 ">
                  cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* boostrap for end */}
    </>
  );
}
