import './experience.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Experience() {
  useGSAP(() => {
       gsap.from("#para1", {
         y: 100,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: "#para1",
           scroller: "body",
           scrub: 2,
           start: "top 80%",
           end: "top 30%",
         }
       })
       gsap.from(".slider", {
         y: 100,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: ".slider",
           scroller: "body",
           scrub: 2,
           start: "top 80%",
           end: "top 30%",
         }
       })
     })

  return (
    <div id="experience">
      <h1 id="para1">WORK EXPERIENCE</h1>
      <div className="slider">
        <div className="exp-card">
          <h3>Freelance, Balaghat, Madhya Pradesh</h3>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p><strong>Duration:</strong> Jan 2026 – Present</p>
          <p>Delivered end-to-end web applications using Spring Boot, React.js, and MySQL with secure APIs and optimized performance.</p>
        </div>
        <div className="exp-card">
          <h3>Brightorial Pvt Ltd, Balaghat, Madhya Pradesh</h3>
          <p><strong>Role:</strong> Software Developer</p>
          <p><strong>Duration:</strong> May 2025 – Present</p>
          <p>Built JobSahi Admin Dashboard using React.js & Tailwind CSS with PHP APIs, including CRUD, JWT authentication, analytics, and notifications.</p>
        </div>
        <div className="exp-card">
          <h3>Lord’s Mark Insurance Broking Services Pvt. Ltd., Thane, Maharashtra</h3>
          <p><strong>Role:</strong> IT Developer</p>
          <p><strong>Duration:</strong> Dec 2024 – April 2025</p>
          <p>Developed MIS system using Spring Boot & Angular and invoice module with React.js and MySQL for real-time tracking.</p>
        </div>
        <div className="exp-card">
          <h3>NIT Solution Pvt Ltd, Kolkata, West Bengal</h3>
          <p><strong>Role:</strong> Java Developer</p>
          <p><strong>Duration:</strong> Nov 2023 – Oct 2024</p>
          <p>Built Employee Management System using Spring Boot & Angular with secure REST APIs and MySQL integration.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
