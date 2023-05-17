import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../farmer/ALNavbar';
import Swal from 'sweetalert2';

const ContactFieldOff = () => {
  const lsEmail = localStorage.getItem('userEmail');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3007/api/v1/farmer/profile/${lsEmail}`
        );
        console.log(response.data.user);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPhone(response.data.user.phone);
        setAddress(response.data.user.address);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const contactData = (e) => {
    e.preventDefault();
    const farmerdoc = {
      email,
      name,
      phone,
      address,
      reason,
    };
    axios
      .post('http://localhost:3007/api/v1/farmer/contactfo', farmerdoc)
      .then((res) => {
        if (res.data.message === 'success') {

          // Swal.fire('Good job!', 'You clicked the button!', 'success');
          window.location.href = '/farmer/dashboard';
        } else {
          console.log('error');
          Swal.fire('Invalid Credentials', 'You clicked the button!', 'error');
        }
      })
      .catch((error) => {
        try {
          console.log(error);
        } catch (error) {
          console.log('error');
        }
      });
  };
  return (
    <>
      <NavBar />
      <div
        class="mask d-flex align-items-center h-100 gradient-custom-3 "
        style={{
          marginTop: '100px',
          marginBottom: '30px',
        }}
        className="mainRegDiv"
      >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: '15px' }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Contact Field Officer
                  </h2>
                  <hr />
                  <form>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                      <p class="text-muted mb-0">{email}</p>
                    </div>
                    <hr />
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Your Name
                      </label>
                      <p class="text-muted mb-0">{name}</p>
                    </div>
                    <hr />
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Address
                      </label>
                      <p class="text-muted mb-0">{address}</p>
                    </div>
                    <hr />
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Contact No
                      </label>
                      <p class="text-muted mb-0">{phone}</p>
                    </div>
<hr />
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4cg">
                        Why you need Field officer?
                      </label>
                      <textarea
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        rows="5"
                        onChange={(e) => {
                          setReason(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={contactData}
                      >
                        Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFieldOff;
