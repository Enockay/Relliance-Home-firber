import "./index.css";
import facebook from './assets/facebook.svg';
import location from './assets/location.svg';
import telegram from './assets/telegram.svg';
import phone from './assets/phone.svg';
import whatssap from './assets/what.svg';
import pins from './assets/pins.svg';
import home from './assets/home.svg';

const Contact = () =>{
    return(
        <>
         <div className="Contact-us">
          <h2 className="cont-head">Contact-Us</h2>
          <div className="collection-contact">
          <div className="call-items">
            <div className="whatsapp-items">
            <p className="contact-p" ><img src={whatssap} className ="c-icons" width="5%"></img>0746478467</p>
            <p className="contact-p"><img src={phone} className ="c-icons" width="5%" ></img> 0746478467</p>
            </div>
           <div className="Facebook-items">
            <p className="contact-p"><img src={facebook} width="5%" className ="c-icons"></img><a href="https://web.facebook.com/p/Reliance-Home-Fiber-100074206633873/?_rdc=1&_rdr">Reliance Home fibre</a></p>
            <p className="contact-p" ><img src={telegram} width="5%" className ="c-icons"></img>0746478467</p>
            </div>
            <div className="location">
              <p><img src={location} width="4%" className ="c-icons" ></img> <a href="https://www.google.com/maps/place/C+House/@-1.3633032,38.0075263,17z/data=!3m1!4b1!4m6!3m5!1s0x1824532bbc02796d:0x8f6f11162cfef598!8m2!3d-1.3633032!4d38.0101012!16s%2Fg%2F11r4b03jw7?entry=ttu">Kitui-Town</a></p>
              <p id="visit" ><img src={home} width="4%" className ="c-icons" ></img>Visit our offices at  kitui Nearest to Naivas Super Market.</p>
              <p> <img src={pins} width="4%" className ="c-icons"></img>: 1440-90200</p>
            </div>
            
            </div>
           
          </div>
         </div>
        </>
    )

}

export default Contact;