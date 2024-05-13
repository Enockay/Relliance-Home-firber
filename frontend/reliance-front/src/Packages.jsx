import React, { useState } from 'react';
import './index.css'
import BookPage from './Bookpage';// Make sure to import BookPage component

let getCarryProp;

const Packages = ({ onSubscribeClick,bookPageProps}) => {
  let carryProp;

  const packages = [
    { name: 'DIAMOND', mbps: '6 Mbps Unliminet', users: 'Limitted for 5 users', overloadBuffer: 'Buffer when Overload', liveStreamingBuffer: 'Buffer Live Streaming', cost: 'Cost ksh 1,999' },
    { name: 'SILVER', mbps: '9 Mbps Unliminet', users: 'Efficiently 10 users', overloadBuffer: 'Mini-Buffer when Overload', liveStreamingBuffer: 'Buffer Live Streaming', cost: 'Cost ksh 2,999' },
    { name: 'BRONZE', mbps: '12 Mbps Unliminet', users: 'Suitable for 15 users', overloadBuffer: 'No-Buffer when Overload', liveStreamingBuffer: 'No smooth Live Streaming', cost: 'Cost ksh 4,499' },
    { name: 'GOLD', mbps: '15 Mbps Unliminet', users: 'Suitable for 30 users', overloadBuffer: 'No Buffering', liveStreamingBuffer: 'Smooth Live Streaming', cost: 'Cost ksh 5,999' }
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSubscribeClick = (pkg) => {
    setSelectedPackage(pkg);
    onSubscribeClick(pkg);

      carryProp = selectedPackage
      console.log(carryProp);

  };

    getCarryProp = () => {
  return carryProp
}

  return (
    <div className="packages">
      <center>
        <h2 className="package-header">OUR PACKAGES</h2>
      </center>
      <div className="li-packages">
        {packages.map((pkg, index) => (
          <div className="p1" key={index}>
            <center><h3 className="Diamond">{pkg.name}</h3></center>
            <h4 className="mbps">{pkg.mbps}</h4>
            <p>{pkg.users}</p>
            <p>{pkg.overloadBuffer}</p>
            <p>{pkg.liveStreamingBuffer}</p>
            <h4 className="cost">{pkg.cost}</h4>
            <center><button className="subscribe" onClick={() => { handleSubscribeClick(pkg); onSubscribeClick(pkg); }}>Subscribe Now</button></center>
          </div>
        ))}
      </div>
      {selectedPackage && <BookPage {...bookPageProps} packageDetails={selectedPackage} />}
    </div>
  );
};

export default Packages;
export{ getCarryProp }
