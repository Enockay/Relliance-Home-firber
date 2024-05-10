import "./index.css";

const Packages = () =>{
    return(
        <>
        <div className="packages">
           <center>
            <h2>Our-Packages</h2>
            </center> 
       
        <div className="li-packages">
          <div className="p1">
          <center><h3 className="Diamond">DIAMOND</h3></center> 
            <h4>6 Mbps Unliminet</h4>
            <p>Limitted for 5 users</p>
            <p>Buffer when Overload</p>
            <p>Buffer Live Streaming</p>
            <h4 className="cost">Cost ksh 1,999</h4>
             <center><button className="subscribe">Subscribe-Now</button></center>
          </div>
          <div className="p1">
          <center><h3 className="Diamond">SILVER</h3></center> 
            <h4>9 Mbps Unliminet</h4>
            <p>Effiecintly 10 users</p>
            <p>Mini-Buffer when Overload</p>
            <p>Buffer Live Streaming</p>
            <h4 className="cost">Cost ksh 2,999</h4>
             <center><button className="subscribe">Subscribe-Now</button></center>
          </div>

          <div className="p1">
          <center><h3 className="Diamond">BRONZE</h3></center> 
          <h4>12 Mbps Unliminet</h4>
            <p>Suitable for 15 users</p>
            <p>No-Buffer when Overload</p>
            <p> No soomth Live Streaming</p>
            <h4 className="cost">Cost ksh 4,499</h4>
             <center><button className="subscribe">Subscribe Now</button></center>
          </div>

          <div className="p1">
          <center><h3 className="Diamond">GOLD</h3></center> 
            <h4>15 Mbps Unliminet</h4>
            <p>Suitable for 30 users</p>
            <p>No Buffering</p>
            <p>Smooth  Live Streaming</p>
            <h4 className="cost">Cost ksh 5,999</h4>
             <center><button className="subscribe">Subscribe-Now</button></center>
          </div>
        </div>
        </div>
        </>
    )
};

export default Packages;