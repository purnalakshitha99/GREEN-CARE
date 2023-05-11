import React from "react";
import NavBar from "../../../layouts/navbar";
import Categories from "./Categories";

function Home() {
  return (
    <>
      <NavBar />

      <div className="  ">
        <div className="image">
          {/* overlay */}

          <img
            className="image "
            src="https://img.freepik.com/free-photo/agriculturist-woman-looks-tobacco-field_1150-5860.jpg?size=626&ext=jpg&ga=GA1.1.572160328.1653035502&semt=sph"
          />
        </div>
      </div>
      <Categories />
    </>
  );
}

export default Home;
