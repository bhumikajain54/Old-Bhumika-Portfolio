import './education.css';
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Education() {
   useGSAP(() => {
        gsap.from("#paras", {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: "#paras",
            scrub: 2,
            start: "top 80%",
            end: "top 30%",
          }
        })
        gsap.from(".slider", {
          y: 100,
          duration: 1,
          scrollTrigger: {
            trigger: ".slider",
            scrub: 2,
            start: "top 80%",
            end: "top 30%",
          }
        })
      })

  return (
    <div id="education">
      <h1 id="paras">EDUCATIONAL QUALIFICATION</h1>
      <div className="slider">
        <div className="edu-card">
          <h3>Fullstack Developer with JAVA - 2024 – 2025</h3>
          <p><strong>Institute:</strong> Itvedant Education Pvt. Ltd., Mumbai</p>
          <p>Completed Between July 2024–2025</p>
        </div>
        <div className="edu-card">
          <h3>MCA - 2024</h3>
          <p><strong>University:</strong> Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</p>
          <p><strong>Institute:</strong> SGSITS, Indore</p>
          <p><strong>CGPA:</strong> 6.97</p>
        </div>
        <div className="edu-card">
          <h3>BCA - 2022</h3>
          <p><strong>University:</strong> Makhanlal Chaturvedi National University, Bhopal</p>
          <p><strong>Institute:</strong> Arihant Computers, Balaghat</p>
          <p><strong>CGPA:</strong> 9.10</p>
        </div>
        <div className="edu-card">
          <h3>12th - 2019</h3>
          <p><strong>Board:</strong> Board of Secondary Education, Madhya Pradesh</p>
          <p><strong>School:</strong> Shri Dadawadi Jain HSS, Balaghat</p>
          <p><strong>Percentage:</strong> 69%</p>
        </div>
        <div className="edu-card">
          <h3>10th - 2017</h3>
          <p><strong>Board:</strong> Central Board of Secondary Education, Delhi</p>
          <p><strong>School:</strong> Maharishi Vidya Mandir, Balaghat</p>
          <p><strong>CGPA:</strong> 5.4</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
