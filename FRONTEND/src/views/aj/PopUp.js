import React from "react";

function PopUp({ visivle, onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visivle) return null;
  return (
    <div
      id="container"
      //  onClick={handleClose}
      onClick={handleClose}
      className="fixed justify-center inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex "
    >
      <div className="  justify-center flex p-4 bg-white m-5 rounded-xl md:m-5 md:flex md:ml-[300px] shadow-lg md:w-[800px]">
        <form className=" p-5">
          <span className=" mx-[200px] text-xl font-bold flex">Mannegaer</span>
          {/* <div className="bg-white pb-4 md:m-5 md:flex md:ml-[300px] shadow-lg md:w-[800px] "> */}
          <label>Manager Name</label>
          <input
            className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-row mb-2 shadow-md"
            type="text"
            placeholder="Full name"
          />

          <label>Employee Number</label>
          <input
            className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
            type="text"
            required
            placeholder="asf@gmail.com"
          />
          <label>Password</label>
          <input
            className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex  mb-2 shadow-md"
            type="password"
            placeholder="****"
          />

          <label>Confirm Password</label>
          <input
            className="frmname border-2 border-gray-300 rounded-xl px-2 p-2 w-[500px] flex flex-col mb-2 shadow-md"
            type="password"
            placeholder="****"
          />

          <button
            type="submit"
            className="btn-primary shadow-md w-[200px] h-10 ml-[150px]"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
