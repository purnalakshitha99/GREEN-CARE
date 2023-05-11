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
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-green">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    // <div className="shadow-md  top-0 left-0 w-full fixed ">
    //   <div className="md:flex bg-green-600  md:px-10 px-7 items-center justify-between ">
    //     <div className="text-2xl font-bold cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
    //       <span className="text-3xl text-indigo-600 mr-1 pt-2">
    //         {/* <ion-icon name="airplane-outline"></ion-icon> */}
    //       </span>
    //       <Link to='/'>
    //       Green Care
    //       </Link>
    //     </div>
    //     {/* search bar */}
    //     {/* <div className="bg-gray-200 rounded-full items-center ml-72 mt-2 h-[40px] flex px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
    //       <AiOutlineSearch size={20} />
    //       <input
    //         type="text"
    //         placeholder="Search Foods"
    //         className=" bg-transparent p-1 w-full rounded-full focus:outline-none "
    //       ></input>
    //     </div> */}
    //     <div
    //       onClick={() => setOpen(!open)}
    //       className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
    //     >
    //       <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
    //     </div>

    //     <ul
    //       className={`md:flex md:items-center md:pb-0 pb-12 text-2xl absolute   md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duratio-500 ease-in
    //      ${
    //        open ? "top-20 opacity-100" : "top-[-490px]"
    //      } opacity-0 md:opacity-100 bg-green-600
    //      `}
    //     >
    //       <li className="md:ml-8 md:my-0 my-3 ">
    //         <Link
    //           to="/visitorhome"
    //           className="hover:scale-110 hover:text-white ml-10"
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li className="md:ml-8 md:my-0 my-3 ">
    //         <Link
    //           to="/displayreport"
    //           className="hover:scale-110  hover:text-white ml-10"
    //         >
    //           Reports
    //         </Link>
    //       </li>
    //       <li className="md:ml-8 md:my-0 my-2 ">
    //         <Link
    //           to="/infotable"
    //           className="hover:scale-110 hover:text-white ml-10"
    //         >
    //           Farmer
    //         </Link>
    //       </li>

    //       <li className=" hidden md:flex md:ml-8 cursor-pointer  rounded-xl md:hover:scale-125 duration-300  ">
    //         <IoNotificationsOutline size={25} />
    //       </li>

    //       <li className="hidden md:flex md:ml-8 cursor-pointer items-center  rounded-xl md:hover:scale-125 duration-300">
    //         <BsPersonCircle size={25} />
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default NavBar;
