import "./index.css";

const BookPage = () =>{
    return(
        <>
        <div className="modal">
           
            <form className="modal-content">
            <h3>Get Fibre Installation!</h3>
                <div className="item">
                <label className="label">Full Names :</label>
                 <input type="text" className="input" placeholder="Enter your full Names" required></input>
                </div>
                
                <div className="item">
                <label className="label">Location : </label>
                <input type="text" className="input" placeholder="Enter Your Location" required></input>
                </div>
               
                <div className="item">
                <label className="Label">Package :</label>
                <input type="text" className="input" placeholder="" required></input>
                </div>

                <div className="item">
                <label className="label">Contact :</label>
                <input type="Number" className="input" required placeholder="Your Contact Details"></input>
                </div>
                
                <div className="button-list">
                <button className="button">Book-Now </button>
                <button className="button">Change-Package</button>
                <button className="button">Cancel-Booking</button>
                </div>
                
            </form>
        </div> 
        </>
    )
}

export default BookPage