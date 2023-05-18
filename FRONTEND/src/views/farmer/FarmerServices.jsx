import React from 'react';
import Navbar from './ALNavbar';
import Footer from './Footer'

const FarmerServices = () => {
  return (
    <>
      <Navbar />
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
                <a class="btn btn-warning" href="/farmer/services/contactfo">
                  Click Here
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
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <h2>Animal Health problem?</h2>
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
                <a class="btn btn-warning" href="/farmer/services/contactdoctor">
                  Click Here
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12" >
              <div class="about-img" style={{marginTop:'70px'}}>
                <img
                  alt=""
                  class="img-fluid"
                  src="https://img.freepik.com/free-photo/veterinary-farm-walking-cowshed-checking-cows_1303-30754.jpg?w=740&t=st=1683949126~exp=1683949726~hmac=229384bf6b8a97055873fdd4092fadbf96217fb03332fcbeee336d1aa389a807"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default FarmerServices;
