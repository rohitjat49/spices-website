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
        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="tab-content">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {tableData.map((product) => (
                <div key={product._id} className="col">
                  <div className="card h-100 border-0 shadow-sm">
                    {product.image && product.image.url ? (
                      <img
                        className="card-img-top rounded"
                        src={product.image.url}
                        alt={product.caption}
                        style={{ maxHeight: "200px", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="card-body d-flex align-items-center justify-content-center">
                        <p className="card-text">No Image Available</p>
                      </div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.caption}</p>
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
