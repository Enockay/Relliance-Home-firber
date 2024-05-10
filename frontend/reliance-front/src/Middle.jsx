import "./index.css";
import image from "./assets/greenWifi.png";

const Middle = () => {
  return (
    <>
      <div className="middle">
            <center><h1 className="services">Our-Services</h1></center>
        <div className="items">
           <div className="service-1">
              <img src={image} width="600px" height="280px"></img>
           </div>
        <div className="service-1">
             <h2>1.We do Wifi installation</h2>
             <h2>2.We provide fibre Network</h2>
             <h2>3.We do Wireless Network Installation</h2>
             <h2>4.Free wifi Maintaince</h2>
             <h2>5.Farm Wifi Expansion</h2>
      </div>
        </div>
        

      </div>
    </>
  )
}

export default Middle