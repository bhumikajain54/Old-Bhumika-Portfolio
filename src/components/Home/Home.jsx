import React from 'react';
import './home.css';
import man from '../../assets/man.png';
import Typewriter from 'typewriter-effect';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from 'react-scroll';

function Home() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".line1", {
      y: 80,
      duration: 1,
    })
    tl.from(".line2", {
      y: 80,
      duration: 1,
    })
    tl.from(".line3", {
      y: 80,
      duration: 1,
    })
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
    })
  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">BHUMIKA JAIN</div>
          <div className="line3">
            <Typewriter
              options={{
                strings: ['FULL STACK WEB DEVELOPER', 'SOFTWARE DEVELOPER', 'EDITOR'],
                autoStart: true,
                loop: true,
                delay: 500,
                deleteSpeed: 50,
                pauseFor: 1000,
                wrapperClassName: 'typewriter-wrapper',
                cursorClassName: 'typewriter-cursor',
              }}
            />
          </div>
          <Link to="contact" smooth={true} duration={500}>
            <button>HIRE ME</button>
          </Link>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;