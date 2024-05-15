import "./App.css";
import wifi from './assets/wifi.svg'
import { useState } from "react";

const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const locations = [
        "Naivas supermarket",
        "Kitui Stage",
        "MulMall Mall",
        "Mulleys Supermarket",
        "C-House",
        "Mangunas Supermarket"
        // Add more locations as needed
    ];

    return (
        <>
            <div className="header">
                <div className="header-items">
                    <div className="head-line">
                        <h2 className="h2"><img src={wifi} alt="Logo" /> Reliance Home Fiber</h2>
                        <p className="h2-p">Unlimited network at low cost</p>
                    </div>
                    <div className="icons">
                        <span className="span">Home</span>
                        <span className="span" id="hidden-icons">Who Are We</span>
                        <span className="span" id="hidden-icons">Services</span>
                        <span className="span">Packages</span>
                        <span className="span" onClick={toggleDropdown}>
                            Coverage
                            {isDropdownVisible && (
                                <div className="dropdown">
                                    {locations.map((location, index) => (
                                        <div key={index} className="dropdown-item">
                                           <l1>{location}</l1> 
                                        </div>
                                    ))}
                                </div>
                            )}
                        </span>
                        <span className="span" id="hidden-icons">Contact-Us</span>
                        <span className="span" id="hidden-icons">News</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;