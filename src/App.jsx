import React from 'react';
import './App.css';
import Contactme from './components/contactme/contactme';
import {useTypewriter,cursor} from "react-simple-typewriter";
import { Link,animateScroll } from 'react-scroll';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import videobg from "./assets/videobg.mp4";
import luffy from "./assets/luffy image 1.png";
import Logo from "./assets/logo1.png";
import htmlicon from "./assets/icons8-html.svg";
import  cssicon from "./assets/icons8-css.svg";
import jsicon from "./assets/icons8-javascript.svg";
import reacticon from "./assets/icons8-react-js.svg";
import mongodbicon from "./assets/icons8-mongodb.svg";
import nodeicon from "./assets/icons8-nodejs.svg";
import mysqlicon from "./assets/icons8-mysql.svg";
import expressicon from "./assets/icons8-express-js.svg";
import jwticon from "./assets/icons8-jwt.svg";
import pythonicon from "./assets/icons8-python.svg";
import Projects from './components/projectscomponent/projects';
import { GiHamburgerMenu } from "react-icons/gi";


function App() {
 const [typeEffect]=useTypewriter({
  words:["Web Developer","Ml Enthusiast"],
  loop:{},
  typeSpeed:100,
  deleteSpeed:80,
  delaySpeed:200
 })
 const options = {
  // Your options here, for example:
  duration: 500,
  smooth: true,
};
 const isMobile = window.innerWidth <= 700;
  return (
    <>
      <div className='body'>
            <div id="home" className="intro">
              <video src={videobg} autoPlay muted loop/>
              <div className='overlay'></div>
              <div className='introdetails'>
               <p><b> I am <b>Nishanth</b></b> </p>
               <p1>A {typeEffect}</p1>
               <div className='introaddress'>
                 <p><b>Delhi,India</b></p>
               </div>
              </div>
            </div>
          <div className='header'>
            <div className='logo'>
              <img src={Logo} />
            </div>
             {isMobile ? undefined :
                <ul>
                  <li>
                    <Link
                    to='home'
                    smooth={true}
                    offset={-55}
                    duration={500}
                    
                    >
                      Home
                    </Link>
                    </li>
                  <li>
                    <Link
                    to='aboutme'
                    smooth={true}
                    offset={-55}
                    duration={500}
                    >
                    About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='resume'
                      smooth={true}
                      offset={-55}
                      duration={500}
                      >
                       Resume
                      </Link>
                  </li>
                  <li>
                      <Link
                        to='projects'
                        smooth={true}
                        offset={-55}
                        duration={500}
                        >
                        Projects
                      </Link>
                    </li>
                  <li >
                    <a onClick={()=>animateScroll.scrollToBottom(options)}>
                    Contact
                    </a> 
                  </li>
                </ul>
             }
              
            </div>
            <div className='socials'>
              <ul>
                <li>
                  <a href='https://www.instagram.com/nishanth.c.7/'><FaInstagram /></a>
                </li>
                <li>
                  <a href='https://twitter.com/NishanthFolio'><FaXTwitter /></a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/nishanth-babu-challa/'><FaLinkedinIn /></a>
                </li>
              </ul>
              <p>Follow me</p>
            </div>
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
            <div id="resume" className='resumesection'>
               <div className='resumeheading'>
                  <p>My Resume</p>
               </div>
               <div className='resumecontent'>
                 <div className='workexperiencecontent'>
                   <div className='workheading'>
                      <p>Experience</p>
                   </div>
                   <div className='workyear'>
                        <div className='circle'>1</div>
                        <div>
                            <p>
                            Jun 2023- Nov 2023
                            </p>
                        </div>
                     
                   </div>
                   <div className='role'>
                      <div className='rolename'>
                        <p>Web Developer Intern</p>
                      </div>
                      <div className='companyname'>
                         Algomatix Technologies Pvt Ltd
                      </div>
                      <div className='rolework'>
                        <p1>I've created a website which will be used by the company to rent out warehouse's space under their command</p1>
                      </div>
                   </div>
                 </div>
                 <div className='educationcontent'>
                     <div className='educationheading'>
                        <p>Education</p>
                     </div>
                     <div className='workyear'>
                        <div className='circle'>1</div>
                        <div>
                            <p>
                            2021-2025
                            </p>
                        </div>
                     
                   </div>
                   <div className='role'>
                      <div className='rolename'>
                        <p>Electronics and Communication Engineering</p>
                      </div>
                      <div className='companyname'>
                         National Institute of Technology, Delhi
                      </div>
                      <div className='rolework'>
                        <p1>CGPA : 8.08</p1>
                      </div>
                   </div>
                   <div className='workyear'>
                        <div className='circle'>2</div>
                        <div>
                            <p>
                            2023-2025
                            </p>
                        </div>
                     
                   </div>
                   <div className='role'>
                      <div className='rolename'>
                        <p>AI and ML (Minor Degree)</p>
                      </div>
                      <div className='companyname'>
                         <p>National Institute of Technology,Delhi</p>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
            <div className='technicalskills'>
                 <div className='technicalskillsheading'>
                    <p>
                      Technical Skills
                    </p>
                 </div>
                 <div className='skillsiconsdiv'>
                 <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={htmlicon}/>
                            </div>
                            <div className='skillname'>
                              <p>HTML</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={cssicon}/>
                            </div>
                            <div className='skillname'>
                              <p>CSS</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={jsicon}/>
                            </div>
                            <div className='skillname'>
                              <p>JAVASCRIPT</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={reacticon}/>
                            </div>
                            <div className='skillname'>
                              <p>REACT JS</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={nodeicon}/>
                            </div>
                            <div className='skillname'>
                              <p>NODE JS</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={expressicon}/>
                            </div>
                            <div className='skillname'>
                              <p>EXPRESS JS</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={mongodbicon}/>
                            </div>
                            <div className='skillname'>
                              <p>MONGO DB</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={mysqlicon}/>
                            </div>
                            <div className='skillname'>
                              <p>MY SQL</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={jwticon}/>
                            </div>
                            <div className='skillname'>
                              <p>JWT</p>
                            </div>
                      </div>
                      <div className='iconsdiv'>
                            <div className='icon'>
                                <img src={pythonicon}/>
                            </div>
                            <div className='skillname'>
                              <p>Python</p>
                            </div>
                      </div>
                 </div>
            </div>
            <Projects id="projects"/>
            <Contactme id="contact"/>
      </div>
    </>
  )
}

export default App;
