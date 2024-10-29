import React, { useEffect, useState } from 'react';
import './App.css';
const Contactme = React.lazy(()=> import("./components/contactme/contactme"));
import {useTypewriter,cursor} from "react-simple-typewriter";
import { Link,animateScroll } from 'react-scroll';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "./assets/logo1.png";
import videobg from "./assets/videobg.mp4";
const AboutSection =  React.lazy(()=>import('./components/aboutme/aboutme'));
const TechnicalSection = React.lazy(()=>import('./components/technicalsection/technicalsection'));
const Projects = React.lazy(()=>import("./components/projectscomponent/projects"));
import Loading from './components/loading/loading';
import ResumeComponent from './components/resumesection/resumesection';


function App() {

  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  });
    return (
      <div>
        {
          isLoading ? <Loading /> : <MainContent />
        }
      </div>
    )
}


const MainContent = () =>{
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
  return(
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

              <AboutSection id="about"/>
              <ResumeComponent id="resume"/>
              <TechnicalSection />
              <Projects id="projects"/>
              <Contactme id="contact"/>
        </div>
      </>
  )
}

export default App;
