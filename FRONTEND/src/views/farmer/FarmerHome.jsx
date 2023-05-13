import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const FarmerHome = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.pexels.com/photos/7728347/pexels-photo-7728347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption">
                <h5>First slide label</h5>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/young-female-gardener-examining-plants-greenhouse_23-2147918557.jpg?w=740&t=st=1683867894~exp=1683868494~hmac=e2e6e1ffa89692ca6443c623cff6105de8cdf10d37ea9dc3d8c8f942348b2483"
                class="d-block w-100 "
                alt="..."
              />
              <div class="carousel-caption ">
                <h5>Second slide label</h5>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/portrait-asian-farmer-woman-holding-wooden-box-full-fresh-raw-vegetables-organic-farm-concept_1150-55791.jpg?w=740&t=st=1683867793~exp=1683868393~hmac=9c7a58fc6a09ce337757cfa12e9c6100c8267bce021b9278f75c6ab4f2df6743"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption ">
                <h5>Third slide label</h5>
                <p>
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section class="about section-padding" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img
                  alt=""
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/smart-farming-5-0-green-plant-product-agricultural-technology-social-media-post-background_53876-96918.jpg?w=740&t=st=1683875307~exp=1683875907~hmac=42381d505be57a14a33c88242238b76b37e6bbdb9c54b8fa83547fc431814f05"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>Crop Nutrition</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam, labore reiciendis. Assumenda eos quod animi! Soluta
                  nesciunt inventore dolores excepturi provident, culpa beatae
                  tempora, explicabo corporis quibusdam corrupti. Autem,
                  quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum
                  dolor, ipsa perferendis porro doloribus obcaecati placeat
                  natus iste odio est non earum?
                </p>
                <a class="btn btn-warning" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about section-padding" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>Need Consultation?</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam, labore reiciendis. Assumenda eos quod animi! Soluta
                  nesciunt inventore dolores excepturi provident, culpa beatae
                  tempora, explicabo corporis quibusdam corrupti. Autem,
                  quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum
                  dolor, ipsa perferendis porro doloribus obcaecati placeat
                  natus iste odio est non earum?
                </p>
                <a class="btn btn-warning" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img
                  alt=""
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/man-farm-with-tablet_23-2148579687.jpg?w=740&t=st=1683919225~exp=1683919825~hmac=99f471a37d6501ebb092159b5b2ca465f901f236d34f02667ab9e0157ee9aaec"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about section-padding" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img
                  alt=""
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/veterinary-farm-walking-cowshed-checking-cows_1303-30754.jpg?w=740&t=st=1683949126~exp=1683949726~hmac=229384bf6b8a97055873fdd4092fadbf96217fb03332fcbeee336d1aa389a807"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>Livestock Health Problem?</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam, labore reiciendis. Assumenda eos quod animi! Soluta
                  nesciunt inventore dolores excepturi provident, culpa beatae
                  tempora, explicabo corporis quibusdam corrupti. Autem,
                  quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum
                  dolor, ipsa perferendis porro doloribus obcaecati placeat
                  natus iste odio est non earum?
                </p>
                <a class="btn btn-warning" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default FarmerHome;