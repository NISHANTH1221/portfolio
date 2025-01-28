import React from "react";
import "./contactme.css"
function Contactme(){
    return(
        <div className="contactmebody">
            <div className="contactmeheading">
               <p>CONTACT ME</p>
            </div>
            <div className="contactbody" >
                <form action="https://formspree.io/f/xyyreerw" method="POST" className="contactform">
                        <div className="initialdetails">
                            <input type="text" name="User"  placeholder="Name" required/>
                            <input type="email" name="Email" id="email" placeholder="Email Address" required/>
                            <input  type="tel" name="PhoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="" placeholder="phonenumber" required/>
                        </div>
                       <textarea name="Message" placeholder="Your Message" />
                       <input  type="submit" value="Submit" className="submit"/>
                </form>
            </div>
            <div className="contactdetails">
                <div className="emailme">
                    <h3>EMAIL ME</h3>
                    <p>cnb03433gmail.com</p>
                </div>
                <div className="callme">
                    <h3>CALL ME</h3>
                    <p>+91 99XX5XX5XX</p>
                </div>
            </div>
            <div className="copyright">
                <p>© Challa Nishanth Babu 2024</p>
            </div>
        </div>
    )
}
export default Contactme;