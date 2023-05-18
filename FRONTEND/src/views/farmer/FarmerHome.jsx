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
                <h5>GreenCare</h5>
                <p>
                  "Transforming Farming Challenges into Solutions: Greencare,
                  Your Partner in Agricultural Success"
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
                <h5>GreenCare</h5>
                <p>
                  "Transforming Farming Challenges into Solutions: Greencare,
                  Your Partner in Agricultural Success"
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
                <h5>GreenCare</h5>
                <p>
                  "Transforming Farming Challenges into Solutions: Greencare,
                  Your Partner in Agricultural Success"
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

      {/* <section class="about section-padding" id="about">
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
      </section> */}

      <section class="about section-padding" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>Need Consultation?</h2>
                <p>
                  Welcome to Greencare! Our dedicated team of field officers is
                  here to support you on your farming journey. Introducing our
                  "Need Consultation" service, where you can receive
                  personalized and efficient solutions to address any farming
                  challenges you may be facing. Whether you're dealing with crop
                  diseases, irrigation issues, pest control, or any other
                  concerns, our experienced field officers will visit you right
                  at your doorstep. They will provide expert advice, guidance,
                  and recommendations tailored to your specific farming needs.
                  With their in-depth knowledge and practical solutions, our
                  field officers are committed to helping you achieve optimal
                  productivity and sustainable agricultural practices. Trust
                  Greencare for reliable consultation and let us empower you to
                  overcome obstacles and succeed in your farming endeavors.
                </p>
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
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5" style={{marginTop:'0px'}}> 
              <div class="about-text">
                <h2>Livestock Health Problem?</h2>
                <p>
                  At Greencare, we understand that the well-being of your
                  livestock is paramount to the success of your farm. That's why
                  we have a dedicated team of expert veterinarians ready to
                  provide specialized care for your animals. Our highly skilled
                  vet doctor is available to address any health concerns or
                  medical needs your livestock may have. Whether it's routine
                  check-ups, preventative care, or treating specific ailments,
                  our vet doctor is equipped with the knowledge and experience
                  to ensure the health and welfare of your animals. With
                  Greencare, you can have peace of mind knowing that your
                  livestock's health is in capable hands. Contact our vet doctor
                  today and let us help you keep your animals in optimal health
                  for a thriving farm.
                </p>
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
