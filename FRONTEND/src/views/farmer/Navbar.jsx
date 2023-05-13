import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <span className="text-success">GreenCare</span>
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href={'/'}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={'/farmer/products'}>
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Services
              </a>
            </li>
            <li class="nav-item me-3">
              <button
                class="btn btn-outline-success"
                onClick={() =>
                  (window.location.href = 'http://localhost:3000/login')
                }
                type="submit"
              >
                Sign In
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-success"
                onClick={() =>
                  (window.location.href = 'http://localhost:3000/farmer/signup')
                }
                type="submit"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
