import "./index.css";
import { getCarryProp} from "./Packages";
import fibre from "./assets/fibre.jpg";
import React, { useState, useEffect } from 'react';

const BookPage = ({ onBackClick }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [Name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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

  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();

  const BookingInfo = {
    Name: Name,
    location: location,
    amount: packageName.cost,
    package: packageName.name,
    contact: contact,
    email: email,
    Date: formattedDate,
    Time: formattedTime
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://reliance.fly.dev/BookItems";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(BookingInfo)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`response from backend ${data.message}`);
        alert(`${data.message}`);
      } else {
        alert("Booking failed, try booking again or directly contact us");
      }
    } catch (error) {
      alert(`Error occurred while submitting your details: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <center>
          <h2 className="Get-fibre">Get Fibre Installation!</h2>
        </center>
        <h4>Enter your details below to be part of Reliance Home</h4>

        <div className="item">
          <label className="label">Name:</label>
          <input type="text" className="input" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full Names" required />
        </div>

        <div className="item">
          <label className="label">Location:</label>
          <input type="text" className="input" value={location} placeholder="Enter Your Location" onChange={(e) => setLocation(e.target.value)} required />
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
          <input type="Number" className="input" value={contact} onChange={(e) => setContact(e.target.value)} required placeholder="Your Contact Details" />
        </div>

        <div className="item">
          <label className="label">Email:</label>
          <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="enter your correct email" />
        </div>

        <div className="button-list">
          <button type="submit" className="book-button" disabled={loading}>
            {loading ? "Booking..." : "Book Now"}
          </button>
          <button type="button" className="cancel-button" onClick={onBackClick} disabled={loading}>Cancel Booking</button>
        </div>
        {loading && <div className="spinner"></div>}
      </form>

      <div className="form-advert" style={{ position: 'relative' }}>
        <img src={fibre} alt="fibre" width="100%" height="100%" style={{ position: 'relative', zIndex: '1' }} />
        <h2 className="welcome-words" style={{ color: colors[index], position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2' }}>{text}</h2>
      </div>
    </div>
  );
};

export default BookPage;