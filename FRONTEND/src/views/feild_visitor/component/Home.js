import React from "react";
import NavBar from "../../../layouts/navbar";
import Categories from "./Categories";

function Home() {
  return (
    <>
      <NavBar />

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/agriculturist-woman-looks-tobacco-field_1150-5860.jpg?size=626&ext=jpg&ga=GA1.1.572160328.1653035502&semt=sph"
              class="d-block imge img-fluid"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <Categories />
    </>
  );
}

export default Home;
