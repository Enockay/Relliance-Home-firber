import "./App.css";
import image from "./assets/image.png";

const Body = () => {

    return(
        <>
        <div className="body">
           <div className="advert">
                <h1 className="h1">ENJOY OUR CHEAP FAST AND RELIABLE INTERNET AT THE COMFORT OF YOUR HOME.</h1>
           </div>
           <div className="image">
               <img src={image} alt="logo" width="80%" height="80%"></img>
           </div>
        </div>
        </>
    )
}

export default Body