import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handlePayment = (amount, productName) => {
    const options = {
      key: "", // Replace with your Razorpay API key
      amount: amount * 100, // Convert amount to paise
      currency: "INR",
      name: "Pottery.com",
      description: `Purchase ${productName}`,
      image: "https://example.com/logo.png", // Replace with your logo URL
      handler: function (response) {
        // Payment successful
        console.log("Payment Success:", response);
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name", // Prefill customer's name
        email: "customer@example.com", // Prefill customer's email
        contact: "9999999999", // Prefill customer's phone
      },
      notes: {
        address: "Customer Address", // Optional notes
      },
      theme: {
        color: "#F37254", // Customize the button color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      // Payment failed
      console.log("Payment Failed:", response.error);
      alert("Payment Failed! Error: " + response.error.description);
    });

    rzp.open();
  };

  const products = [
    { id: 1, name: "Golden Brown Vase", price: 2900, image: "src/components/Card-2.png" },
    { id: 2, name: "Ceramic Tea Pot", price: 2000, image: "src/components/Card-3.png" },
    { id: 3, name: "Plant Pot", price: 1000, image: "src/components/Card-4.png" },
    { id: 4, name: "Earthen Water Pot", price: 500, image: "src/components/Card-5.png" },
    { id: 5, name: "Flower Pot", price: 500, image: "src/components/Card-6.png" },
    { id: 6, name: "Copper Cup", price: 701, image: "src/components/Card-7.png" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="shop-container">
        <h1>Products</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src="src/components/search.png" alt="Search Icon" className="search-icon" />
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h3>₹{product.price}</h3>
              <button onClick={() => handlePayment(product.price, product.name)}>Buy Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
    </>
  );
};

export default Shop;
