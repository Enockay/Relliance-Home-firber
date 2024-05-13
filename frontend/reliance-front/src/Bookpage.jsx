import "./index.css";
import React from 'react';
import { getCarryProp} from "./Packages";

const BookPage = ({ onBackClick }) => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
const packageName = getCarryProp();

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <center>
          <h2>Get Fibre Installation!</h2>
        </center>
        <div className="item">
          <label className="label">Full Names:</label>
          <input type="text" className="input" placeholder="Enter your full Names" required />
        </div>

        <div className="item">
          <label className="label">Location:</label>
          <input type="text" className="input" placeholder="Enter Your Location" required />
        </div>

        <div className="item">
          <label className="Label">Package:</label>
          <input type="text" className="input" placeholder={packageName.name} required />
        </div>

        <div className="item">
          <label className="label">Amount:</label>
          <input type="text" className="input" placeholder={`Cost: ${packageName.cost}`} required />
        </div>

        <div className="item">
          <label className="label">Contact:</label>
          <input type="Number" className="input" required placeholder="Your Contact Details" />
        </div>

        <div className="button-list">
          <button className="button">Book Now</button>
          <button className="button" onClick={onBackClick}>Cancel Booking</button>
        </div>
      </form>
    </div>
  );
};

export default BookPage;
