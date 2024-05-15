import React from 'react';
import image from "./assets/greenWifi.png";
import "./index.css"; // Import your CSS file for styling

const Middle = () => {
  return (
    <div className="middle">
      <center><p className="services">Our-Services</p></center>
      <div className="service-item">
          <img src={image} width="60%" height="100%" ></img>
        <div className="service-2">
            <p className="service-p">1. Internet Service Provider Services</p>
            <p className="service-p">2. We provide fibre Network</p>
            <p className="service-p">3. We do Wireless Network Installation</p>
            <p className="service-p">4. Free wifi Maintenance</p>
            <p className="service-p">5. Farm Wifi Extension</p>
        </div>
      </div>
    </div>
  );
}

export default Middle;
