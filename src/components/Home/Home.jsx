import React from 'react';
import './home.css';
import man from '../../assets/man.png'; // Ensure this path is correct
import Typewriter from 'typewriter-effect';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
function Home() {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    tl.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    tl.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    })
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0})
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
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;