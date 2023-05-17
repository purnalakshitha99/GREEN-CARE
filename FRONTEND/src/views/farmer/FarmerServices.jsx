import React from 'react'
import Navbar from './ALNavbar'

const FarmerServices = () => {
  return (
    <>
    <Navbar/>
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
    </>
  )
}

export default FarmerServices
