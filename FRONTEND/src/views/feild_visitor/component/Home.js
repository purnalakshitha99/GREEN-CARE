import React from "react";
import NavBar from "../../../layouts/navbar";
import Categories from "./Categories";

function Home() {
  return (
    <>
      <NavBar />

      <div className="max-w-[1640px] p-4 mx-auto mt-[45px]  ">
        <div className="max-h-[500px]  -z-50 relative">
          {/* overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center"></div>
          <img
            className=" w-full max-h-[500px] object-cover "
            src="https://img.freepik.com/free-photo/agriculturist-woman-looks-tobacco-field_1150-5860.jpg?size=626&ext=jpg&ga=GA1.1.572160328.1653035502&semt=sph"
          />
          
        </div>
      </div>
      <Categories />
    </>
  );
}

export default Home;
