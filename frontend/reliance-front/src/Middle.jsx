import "./index.css";
import image from "./assets/greenWifi.png";

const Middle = () => {
  return (
    <>
      <div className="middle">
            <center><p className="services">Our-Services</p></center>
        <div className="service-item">
           <div className="service-1">
              <img src={image} width="100%" height="50%"></img>
           </div>
        <div className="service-2">
             <h2>1.We do Wifi installation</h2>
             <h2>2.We provide fibre Network</h2>
             <h2>3.We do Wireless Network Installation</h2>
             <h2>4.Free wifi Maintaince</h2>
             <h2>5.Farm Wifi Extension</h2>
      </div>
        </div>
        

      </div>
    </>
  )
}

export default Middle