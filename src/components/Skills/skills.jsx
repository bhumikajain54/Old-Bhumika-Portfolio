import './skills.css';
import Card from '../Card/Card'; // Import the Card component
import java from '../../assets/java.png';
import frameworks from '../../assets/frameworks.png';
import webdevelopment from '../../assets/webdevelopment.png';
import databasemanagement from '../../assets/databasemanagement.png';
import tools from '../../assets/tools.png';
import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Skills() {
  useGSAP(() => {
       gsap.from("#para2", {
         y: 100,
         opacity: 0,
         duration: 1,
         scrollTrigger: {
           trigger: "#para2",
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
    <div id="skills">
      <h1 id="para2">SKILLS AND TECHNOLOGIES</h1>
      <div className="slider">
        <Card title={"JAVA FULL STACK DEVELOPER"} image={java} />
        <Card title={"SPRING BOOT, REACTJS, ANGULAR, BOOTSTRAP"} image={frameworks} />
        <Card title={"HTML5, CSS3, RESTful APIs"} image={webdevelopment} />
        <Card title={"MYSQL, MONGODB"} image={databasemanagement} />
        <Card title={"GITHUB, POSTMAN, VS CODE, IntelliJ IDEA, MySQL Workbench"} image={tools} />
      </div>
    </div>
  );
}

export default Skills;
