import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define an array of objects containing product data
const products = [
  {
    id: 1,
    name: "Chili",
    description: "Chili products include dried chili flakes, chili powder...",
    fullDescription:
      "Chili products include dried chili flakes, chili powder, chili paste, hot sauces, and chili-infused oils. These products are used in various recipes to add spiciness and flavor. Hot sauces, in particular, come in a wide range of heat levels to cater to different preferences.",
    image: "img/pexels-pixabay-39390.jpg",
  },
  {
    id: 2,
    name: "Turmeric",
    description: "The most common form of turmeric used in cooking is its...",
    fullDescription:
      "The most common form of turmeric used in cooking is its ground powder. Turmeric powder is made by drying and grinding the rhizomes (underground stems) of the turmeric plant. It has a bright yellow color and a warm, slightly bitter taste.",
    image: "img/pexels-martabranco-1340116.jpg",
  },
  {
    id: 3,
    name: "Cumin",
    description:
      "Cumin, also known as jeera, is a spice derived from the dried seeds...",
    fullDescription:
      "Cumin, also known as jeera, is a spice derived from the dried seeds of the Cuminum cyminum plant, which is a member of the parsley family. Here are some key points about cumin...",
    image: "img/pexels-srbscape-15352081.jpg",
  },
  {
    id: 4,
    name: "Ginger",
    description:
      "Ginger is a flowering plant belonging to the Zingiberaceae family...",
    fullDescription:
      "Ginger is a flowering plant belonging to the Zingiberaceae family, which also includes turmeric, cardamom, and galangal. Here are some key points about ginger...",
    image: "img/pexels-pixabay-161556.jpg",
  },
  {
    id: 5,
    name: "Garlic",
    description:
      "Garlic is a species in the onion genus, Allium, and is closely related to onions...",
    fullDescription:
      "Garlic is a species in the onion genus, Allium, and is closely related to onions, shallots, leeks, and chives. Here are some key points about garlic...",
    image: "img/pexels-isabella-mendes-107313-928251.jpg",
  },
  {
    id: 6,
    name: "Coriander",
    description:
      "Coriander, also known as cilantro in some regions, is a herbaceous plant...",
    fullDescription:
      "Coriander, also known as cilantro in some regions, is a herbaceous plant belonging to the Apiaceae family. Here are some key points about coriander...",
    image: "img/pexels-rajesh-s-balouria-1289088-10329642.jpg",
  },
  {
    id: 7,
    name: "Curry masala",
    description:
      "Curry masala, also known as curry powder or curry spice mix, is a blend of various spices...",
    fullDescription:
      "Curry masala, also known as curry powder or curry spice mix, is a blend of various spices commonly used in Indian, Southeast Asian, and other international cuisines. Here are some key points about curry masala...",
    image: "img/pexels-mareefe-678414 (2).jpg",
  },
  {
    id: 8,
    name: "Garam masala",
    description:
      "Garam masala is a popular spice blend originating from the Indian subcontinent...",
    fullDescription:
      "Garam masala is a popular spice blend originating from the Indian subcontinent. Here are some key points about garam masala...",
    image: "img/pexels-riki-lifestyle-77353139-8649386.jpg",
  },
  {
    id: 9,
    name: "Sambar masala",
    description:
      "Sambar masala, also spelled as sambhar masala, is a spice blend used predominantly in South Indian cuisine...",
    fullDescription:
      "Sambar masala, also spelled as sambhar masala, is a spice blend used predominantly in South Indian cuisine, especially in the preparation of sambar, a popular lentil-based stew. Here are some key points about sambar masala...",
    image: "img/pexels-pranjall-kumar-150768-8625813.jpg",
  },
  {
    id: 10,
    name: "Whole onions",
    description: "Whole onions come in various types and varieties...",
    fullDescription:
      "Whole onions come in various types and varieties, including yellow onions, red onions, white onions, and sweet onions such as Vidalia or Walla Walla onions. Each variety has its own distinct flavor profile and culinary uses.",
    image: "img/pexels-karolina-grabowska-4197444.jpg",
  },
  {
    id: 11,
    name: "Dried onions",
    description:
      "Dried onions, also known as dehydrated onions, are onions that have been processed...",
    fullDescription:
      "Dried onions, also known as dehydrated onions, are onions that have been processed to remove moisture, resulting in a shelf-stable product with a longer storage life. Here are some key points about dried onions...",
    image: "img/pexels-alistair-mockett-146505529-10444827.jpg",
  },
  {
    id: 12,
    name: "Onion flakes",
    description:
      "Onion flakes, also known as dried onion flakes or dehydrated onion flakes, are a form of dried onions...",
    fullDescription:
      "Onion flakes, also known as dried onion flakes or dehydrated onion flakes, are a form of dried onions that have been processed into thin, flat pieces. Here are some key points about onion flakes...",
    image: "img/pexels-silvia-trigo-545701-1292984.jpg",
  },
  {
    id: 13,
    name: "Fox Nuts",
    description:
      "Fox Nuts is a type of seed that is rich in protein, calcium, and antioxidants...",
    fullDescription:
      "Fox Nuts is a type of seed that is rich in protein, calcium, and antioxidants. It is a popular snack, especially in India, where it is consumed daily and also prepared on special occasions.",
    image: "img/makhane.jpg",
  },
  {
    id: 14,
    name: "Papad",
    description:
      "Papad is a popular Indian crispy snack made from a variety of ingredients...",
    fullDescription:
      "Papad is a popular Indian crispy snack made from a variety of ingredients such as lentils, chickpea flour, rice flour, or potato. It is typically seasoned with spices and then dried in the sun or roasted to make it crispy. Papad is a versatile dish that can be served as an appetizer, snack, or accompaniment to main meals.",
    image: "img/papad.jpg",
  },
  {
    id: 15,
    name: "Oil",
    description: "Oil can refer to various types depending on its context...",
    fullDescription:
      "Oil can refer to various types depending on its context. Here's a breakdown of different types of oils commonly referred to...",
    image: "img/oil.jpg",
  },
];

export const PhotoUpload = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleReadMore = (productId) => {
    setExpandedId(productId === expandedId ? null : productId);
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
              {products.map((product) => (
                <div key={product.id} className="col-lg-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="flex-shrink-0 img-fluid rounded"
                      src={product.image}
                      alt={product.name}
                      style={{ width: "100px", height:"100px" }}
                    />
                    <div className="w-100 d-flex flex-column text-start ps-4">
                      <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{product.name}</span>
                      </h5>
                      {expandedId === product.id ? (
                        <p>{product.fullDescription}</p>
                      ) : (
                        <p>{product.description}</p>
                      )}
                      <button
                        className={`btn btn-${
                          expandedId === product.id ? "secondary" : "primary"
                        }`}
                        onClick={() => handleReadMore(product.id)}
                        style={{
                          padding: "6px 1px",
                          fontSize: "14px",
                          width: "120px",
                        }}
                      >
                        {expandedId === product.id ? "Show Less" : "Read More"}
                      </button>
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