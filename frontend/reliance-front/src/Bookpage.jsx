import "./index.css";
import { getCarryProp} from "./Packages";
import fibre from "./assets/fibre.jpg";
import React, { useState, useEffect } from 'react';

const BookPage = ({ onBackClick }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const words = ["WELCOME TO RELIANCE HOME FIBRE", "WE THE BEST IN TOWN", "WE WILL GET TO YOU IN THE NEXT 2-3 HOURS AFTER YOU CLICK BOOK NOW", "WE APPRECIATE YOUR INTEREST IN US"];
  const colors = ['white', '#00ff00', '#0000ff', '#ffff00']; // Array of colors for text

  const packageName = getCarryProp();

  useEffect(() => {
    let charIndex = 0;
    let wordIndex = 0;
    const intervalId = setInterval(() => {
      const word = words[wordIndex];
      setText(word.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === word.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          // Start deleting the text after a delay
          deleteText();
        }, 1000);
      }
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, [index]);

  const deleteText = () => {
    let charIndex = words[index].length - 1;
    const intervalId = setInterval(() => {
      const word = words[index];
      setText(word.substring(0, charIndex));
      charIndex--;
      if (charIndex === -1) {
        clearInterval(intervalId);
        // Move to the next word or reset index if reached the end
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 50); // Deleting speed
  };

  const handleSubmit = () => {
    alert("package booked successfully");
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <center>
          <h2 className="Get-fibre">Get Fibre Installation!</h2>
        </center>
        <h4>Enter your details below to be part of Reliance Home</h4>

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
          <input type="text" className="input" value={packageName.name} disabled />
        </div>

        <div className="item">
          <label className="label">Amount:</label>
          <input type="text" className="input" value={packageName.cost} disabled />
        </div>

        <div className="item">
          <label className="label">Contact:</label>
          <input type="Number" className="input" required placeholder="Your Contact Details" />
        </div>

        <div className="button-list">
          <button className="book-button">Book Now</button>
          <button className="cancel-button" onClick={onBackClick}>Cancel Booking</button>
        </div>
      </form>

      <div className="form-advert" style={{ position: 'relative' }}>
        <img src={fibre} alt="fibre" width="100%" height="100%" style={{ position: 'relative', zIndex: '1' }} />
        <h2 className="welcome-words" style={{ color: colors[index], position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2' }}>{text}</h2>
      </div>
    </div>
  );
};

export default BookPage;
