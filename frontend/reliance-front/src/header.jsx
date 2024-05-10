import "./App.css";
import wifi from './assets/wifi.svg'

const Header = () => {

    return(
        <>
        <div className="header">
            <div className="header-items">
                <div className="head-line">
                    <h2 className="h2"><img src={wifi} alt="Logo" /> Reliance Home Fiber</h2>
                    <p className="h2-p">Unlimited network at low cost</p>
                </div>
                {/*
                <div className="desc">
                 <p>Got tired of buying bundles? We have the solution for you!</p>
                 </div>
                */ } 
                <div className="icons">
                    <span>Reliance Home</span>
                    <span>Who Are We</span>
                    <span>Services</span>
                    <span>Our-packages</span>
                    <span>Coverage</span>
                    <span>Contact-Us</span>
                    <span>News</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;