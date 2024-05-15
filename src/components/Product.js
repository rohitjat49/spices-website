

import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          "https://prashilexports.onrender.com/productdashboard"
        );
        setTableData(
          Array.isArray(response.data.photos) ? response.data.photos : []
        );
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Spices
          </h5>
          <h1 className="mb-5">Most Popular Product</h1>
        </div>
        <div
          className="tab-className text-center wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="tab-content">
            <div className="row g-4">
              {tableData.map((product) => (
                <div key={product._id} className="col-lg-6">
                  <div className="d-flex align-items-center">
                    {product.image && product.image.url ? (
                      <img
                        width="100"
                        height="50"
                        src={product.image.url}
                        alt={product.caption}
                      />
                    ) : (
                      <p>No Image Available</p>
                    )}
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{product.name}</span>
                      </h5>
                      <p>{product.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
