import "./aboutme.css";
import React from "react";
import luffy from "../../assets/luffy image 1.png";
const AboutSection = () => {
    return (
        <div>
            <div id='aboutme' className="aboutme">
              <div className='aboutmeheading'>
              <p>About Me</p>
              </div>
              <div className='aboutmecontentbox'>
                      <div className='aboutmecontent' >
                      <p>
                            Hello My name is <b>CHALLA NISHANTH BABU</b>.
                            I am currently student at National Institue Technology, Delhi. I have a passion of building things.
                            I am a Self Taught <b>Full Stack Web developer</b> and my stack is MERN.
                            You can scroll down and find my resume on this website. I am updating the projects regularly in this website.
                            I currently have many ideas to build good AI tools. But as a matter of priority,
                            Currently I shifted my focus towards learning Machine learning. I am building some crazy AI tools which uses Hugging face Large Language models to work.
                            This website serves as my Tech portfolio which built enirely from scratch.
                            I am going to update the website regularly with the new projects.
                      </p>
                      </div>
                      <div>
                        <img src={luffy}/>
                      </div>
              </div> 
            </div>
        </div>
    );
}
 
export default AboutSection;