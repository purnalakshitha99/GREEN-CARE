import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
  // let Links = [
  //   { name: "Home", link: "/" },
  //   { name: "About Us", link: "/" },
  //   { name: "Contact Us", link: "/" },
  // ];
  return (
    <div className="shadow-md  top-0 left-0 w-full fixed  ">
      <div className="md:flex bg-slate-300 py-4">
        <div className="text-2xl font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800 ml-[20px]">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* <ion-icon name="airplane-outline"></ion-icon> */}
          </span>
          Green Care
        </div>
        {/* search bar */}
        {/* <div className="bg-gray-200 rounded-full items-center ml-72 mt-2 h-[40px] flex px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
          <AiOutlineSearch size={20} />
          <input
            type="text"
            placeholder="Search Foods"
            className=" bg-transparent p-1 w-full rounded-full focus:outline-none "
          ></input>
        </div> */}
        <div className="flex cursor-pointer items-center ml-10 space-x-8  ">
          {/* <li className="text-black px-2 ">About Us</li>
         <li className="text-black px-2 ">Contact Us</li>
         <li className="text-black px-2 ">Home</li> */}
          <Link to="/" className="hover:scale-110 hover:text-white ml-[800px]">
            Home
          </Link>
          <Link
            to="/displayreport"
            className="hover:scale-110 hover:text-white ml-10"
          >
            Reports
          </Link>
          <Link
            to="/infotable"
            className="hover:scale-110 hover:text-white ml-10"
          >
            Farmer
          </Link>
          {/* <span className="hover:scale-110 hover:text-white">Home</span>
          <span className="hover:scale-110 hover:text-white">About Us</span>
          <span className="hover:scale-110 hover:text-white">Contact Us</span> */}
        </div>
        <div className=" ml-[85px] cursor-pointer items-center flex rounded-xl hover:scale-125 duration-300  ">
          <IoNotificationsOutline size={25} />
        </div>
        <div className=" ml-5 cursor-pointer items-center flex rounded-xl hover:scale-125 duration-300">
          <BsPersonCircle size={25} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
