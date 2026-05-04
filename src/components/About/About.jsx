import React from 'react';
import './About.css';
import Card from '../Card/Card'; // Uncomment if you want to use the Card component
import java from '../../assets/java.png';
import frameworks from '../../assets/frameworks.png';
import webdevelopment from '../../assets/webdevelopment.png';
import databasemanagement from '../../assets/databasemanagement.png';
import tools from '../../assets/tools.png'; 
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    gsap.from(".circle",{
      x:-100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
     gsap.from(".line",{
      x:-100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
     gsap.from(".aboutdetails h1",{
      x:100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
    gsap.from(".aboutdetails ul",{
      y:100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
    gsap.from(".rightabout",{
      x:100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroller: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      }
    })
  });
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : BHUMIKA JAIN
              </li>
              <li>
                <span>AGE</span> : 23 YEARS
              </li>
              <li>
                <span>GENDER</span> : FEMALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDIENGLISH
              </li>
            </ul>
          </div>
           <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : MASTER OF COMPUTER APPLICATIONS(MCA)
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER APPLICATION
              </li>
              <li>
                <span>CGPA</span> : 6.97
              </li>
              <li>
                <span>COLLEGE</span> : SHRI GOVINDRAM SEKSARIA INSTITUTE OF TECHNOLOGY AND SCIENCE (SGSITS) GOVERNMENT COLLEGE IN INDORE, MADHYA PRADESH
              </li>
            </ul>
          </div>
           <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                JAVA
              </li>
              <li>
                SPRING BOOT, REACTJS, ANGULAR, BOOTSTRAP
                </li>
              <li>
                HTML5, CSS3, RESTful APIs
              </li>
              <li>
                MYSQL, MONGODB
              </li>
              <li>
                GITHUB, POSTMAN, VS CODE, IntelliJ IDEA, MySQL Workbench
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title={"JAVA FULL STACK DEVELOPER"} image={java}/>
         <Card title={"SPRING BOOT, REACTJS, ANGULAR, BOOTSTRAP"} image={frameworks}/>
          <Card title={"HTML5, CSS3, RESTful APIs"} image={webdevelopment}/>
           <Card title={"MYSQL, MONGODB"} image={databasemanagement}/>
           <Card title={"GITHUB, POSTMAN, VS CODE, IntelliJ IDEA, MySQL Workbench"} image={tools}/>
      </div>
    </div>
  );
}

export default About;