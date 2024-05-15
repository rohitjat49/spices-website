import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [tableData, setTableData] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [updatedCaption, setUpdatedCaption] = useState(""); // State for updated caption
  const [selectedProductId, setSelectedProductId] = useState(null); // State to track the selected product ID for updating

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://prashilexports.onrender.com/productdashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTableData(
          Array.isArray(response.data.photos) ? response.data.photos : []
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchUserData();
  }, [forceRender]);

  const handleDelete = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://prashilexports.onrender.com/photos/${_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForceRender((prev) => !prev);
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  const handleUpdate = async (_id) => {
    try {
      const token = localStorage.getItem("token");
      const updatedData = { caption: updatedCaption };
      const response = await axios.put(
        `https://prashilexports.onrender.com/photos/${_id}/caption`, // Updated endpoint without /caption
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Update response:", response.data);
      setForceRender((prev) => !prev);
    } catch (error) {
      console.log("Error updating caption:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
      }
    }
  };

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
                    {console.log("wehjewu", product.url)}

                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{product.name}</span>
                      </h5>
                      {selectedProductId === product._id ? (
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            className="form-control me-2"
                            defaultValue={product.caption}
                            onChange={(e) => setUpdatedCaption(e.target.value)}
                          />
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => handleUpdate(product._id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => setSelectedProductId(null)} // Cancel editing
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <p>{product.caption}</p>
                          <div className="d-flex justify-content-end mt-3">
                            <button
                              className="btn btn-warning me-2"
                              onClick={() => setSelectedProductId(product._id)} // Select product for editing
                            >
                              Edit Caption
                            </button>
                            <button
                              className="btn btn-primary"
                              onClick={() => handleDelete(product._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
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

export default ProductList;
