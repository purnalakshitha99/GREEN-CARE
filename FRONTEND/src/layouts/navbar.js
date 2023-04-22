import React, { useState } from "react";
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
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md  top-0 left-0 w-full fixed ">
      <div className="md:flex bg-green-600 py-4 md:px-10 px-7 items-center justify-between ">
        <div className="text-2xl font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
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
        <div onClick={()=> setOpen(!open)} className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>

      

         <ul className={`md:flex md:items-center md:pb-0 pb-12 text-2xl absolute   md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duratio-500 ease-in
         ${open ? 'top-20 opacity-100'  : 'top-[-490px]'} opacity-0 md:opacity-100 bg-green-600
         `}>
         <li className="md:ml-8 md:my-0 my-3 ">
         <Link to="/" 
         className="hover:scale-110 hover:text-white ml-10">
            Home
          </Link>
         </li>
         <li className="md:ml-8 md:my-0 my-3 ">
          <Link
            to="/displayreport"
            className="hover:scale-110  hover:text-white ml-10"
          >
            Reports
          </Link></li>
         <li className="md:ml-8 md:my-0 my-2 ">
         <Link
            to="/infotable"
            className="hover:scale-110 hover:text-white ml-10"
          >
            Farmer
          </Link>
         </li>

          <li className=" hidden md:flex md:ml-8 cursor-pointer  rounded-xl md:hover:scale-125 duration-300  ">
          <IoNotificationsOutline 
          size={25} />
          </li>
          
          <li className="hidden md:flex md:ml-8 cursor-pointer items-center  rounded-xl md:hover:scale-125 duration-300">
            <BsPersonCircle size={25} />
          </li>
         </ul>

      
          </div>
      </div>
  );
}

export default NavBar;
