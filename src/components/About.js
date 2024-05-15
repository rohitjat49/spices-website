import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="img/mix-organic-seeds-food-powder.jpg"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="img/flat-lay-asian-food-ingredients.jpg"
                  style={{ margintop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="img/pexels-mareefe-672046.jpg"
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="img/pexels-mareefe-678414 (2).jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              About Us
            </h5>
            <h1 className="mb-4">Welcome to Prashil Exports</h1>
            <p className="mb-4">
              Prashil Exports stands out as a premier provider of top-quality
              spices and masalas, with a legacy of delivering exceptional
              flavors to its customers. Their commitment to sourcing the finest
              ingredients and maintaining rigorous quality standards sets them
              apart in the market
            </p>
            <p className="mb-4">
              Prashil Exports is globally recognized for its diverse,
              high-quality products catering to culinary needs. Their
              authenticity and innovation make them a top choice for households
              and businesses worldwide.
            </p>
          
            <Link className="btn btn-primary py-3 px-5 mt-2" to="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
