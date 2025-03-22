// src/components/ContactUs.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";



const mapStyles = {
  height: "250px",
  width: "100%",
};

const defaultCenter = {
  lat: 25.1288, // Replace with actual latitude
  lng: 82.8746, // Replace with actual longitude
};

const ContactUs = () => {
  return (
    <div style={{ color: "#" }}>
      <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "24px" ,color: "#8d6248"}}>
        ✦ Contact Us ✦
      </h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <section className="map-section">
          <div className="map-container">
            <h2 className="map-title">Our Location</h2>
            <div className="map-frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.569123369716!2d82.85859138094577!3d25.10550747500331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fb57885cf6be3%3A0xacb50033b158a44c!2z4KSa4KWB4KSo4KS-4KSwLCDgpIngpKTgpY3gpKTgpLAg4KSq4KWN4KSw4KSm4KWH4KS2IDIzMTMwNA!5e0!3m2!1shi!2sin!4v1734896159765!5m2!1shi!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Chunar"
              ></iframe>
            </div>
          </div>
        </section>

      <div
      className="contact-info"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {/* Address Section */}
      <div
        className="info-box"
        style={{
          backgroundColor: "#8d6248",
          color: "white",
          padding: "20px",
          width: "300px",
          textAlign: "left",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Address</h3>
        <p style={{ margin: "5px 0" }}>Classic Pottery Store</p>
        <p style={{ margin: "5px 0" }}>1234 Main Street Road, Example City</p>
        <p style={{ margin: "5px 0" }}>Florida, 456789</p>
      </div>

      {/* Call Us Section */}
      <div
        className="info-box"
        style={{
          backgroundColor: "#8d6248",
          color: "white",
          padding: "20px",
          width: "300px",
          textAlign: "left",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Call Us</h3>
        <p style={{ margin: "5px 0" }}>Phone: +91 9876543210</p>
        <p style={{ margin: "5px 0" }}>Phone: +91 8765432109</p>
      </div>

      {/* E-Mail Section */}
      <div
        className="info-box"
        style={{
          backgroundColor: "#8d6248",
          color: "white",
          padding: "20px",
          width: "300px",
          textAlign: "left",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>E-Mail</h3>
        <p style={{ margin: "5px 0" }}>Email: contact@classicpottery.com</p>
        <p style={{ margin: "5px 0" }}>Email: support@classicpottery.com</p>
      </div>
    </div>

        {/* Form Section */}
        <h2 style={{ textAlign: "center", margin: "20px 0", fontSize: "24px" ,color: "#8d6248"}}>
          ✦ Send a Message ✦
        </h2>
        <form
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "#8d6248",
            color: "#fff",
            padding: "20px",
            alignItems: "center",
            margin: "20px auto",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input style={inputStyle} type="text" placeholder="Enter your full name" required />
          <input style={inputStyle} type="text" placeholder="Enter your contact number" required />
          <textarea style={{ ...inputStyle, height: "100px" }} placeholder="Type your message here..." required />
          <button
            type="submit"
            style={{
              backgroundColor: "#fff",
              color: "#6A462F",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              
             
              width: "20%",
              alignContent:"center",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

const infoBoxStyle = {
  width: "25%",
  padding: "10px",
  backgroundColor: "#F5EDE4",
  border: "2px solid #6A462F",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
};

const inputStyle = {
  width: "90%",
  padding: "10px",
  border: "none",
  margin: "10px"
};

export default ContactUs;