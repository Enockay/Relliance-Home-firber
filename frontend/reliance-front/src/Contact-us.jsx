import "./index.css";

const Contact = () =>{
    return(
        <>
      
         <div className="Contact-us">
          <h2 className="cont-head">Contact-Us</h2>
          <div className="collection-contact">
          <div className="call-items">
            <div className="whatsapp-items">
            <p className="contact-p" >tell: 0746478467</p>
            <p className="contact-p">Whatsapp: 0746478467</p>
            </div>
           <div className="Facebook-items">
            <p className="contact-p">Facebook:   <a href="https://web.facebook.com/p/Reliance-Home-Fiber-100074206633873/?_rdc=1&_rdr">Reliance Home fibre</a></p>
            <p className="contact-p" >Telegram : 0746478467</p>
            </div>
            </div>
            <div className="location">
              <p>@Visit our offices at C-HOUSE kitui Nearest to Naivas Super Market</p>
              <p>@Address : 1440-90200</p>
            </div>
            
          </div>
         </div>
        </>
    )

}

export default Contact;