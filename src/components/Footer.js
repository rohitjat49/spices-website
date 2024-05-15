import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer  mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Company
            </h4>
            <Link className="btn btn-link" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link" to="/contact">
              Contact Us
            </Link>
            <Link className="btn btn-link" to="/service">
              Services
            </Link>
            <Link className="btn btn-link" to="/product">
              Product
            </Link>
            <Link className="btn btn-link" to="/login">
              Admin Pannel
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Contact
            </h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>24 Nehru Gram,
              Khandwa Road, Indore.
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 7898346430
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
            <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{maxwidth:"400px"}}>
                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div> */}
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright © 2024
              <Link className="border-bottom" to="#">
                InfinityFree.
              </Link>
              All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By
              <Link
                className="border-bottom"
                to="https://rishusinfotech.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rishus Infotech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
