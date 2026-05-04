import './Certification.css';
import Card from '../Card/Card';
import Profilebuilding from '../../assets/profilebuilding.jpg';
import HTML from '../../assets/corewebdesign.jpg';
import SQL from '../../assets/sql.jpg';
import Java from '../../assets/corejava.jpg';
import Spring from '../../assets/fsdspringboot.jpg';
import Webdesign from '../../assets/advancedwebdesign.jpg';
import ccecerficate from '../../assets/cce_certificate.jpg';
import Mongodb from '../../assets/mongodb.jpg';
import Testinginjava from '../../assets/testinginjava.jpg';
import Project from '../../assets/projectandcasestudiesjfsd.jpg';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Certification() {
 useGSAP(() => {
      gsap.from("#para3", {
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: "#para3",
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
    <div id="certification">
       <h1 id="para3">Certification</h1>
      <div className="slider">
        <Card title={"Profile Building"} image={Profilebuilding} />
        <Card title={"Core Web Design"} image={HTML} />
        <Card title={"SQL"} image={SQL} />
        <Card title={"Core Java"} image={Java} />
        <Card title={"Full Stack Development with Spring Boot"} image={Spring} />
        <Card title={"Advanced Web Design"} image={Webdesign} />
        <Card title={"CCE Certificate"} image={ccecerficate} />
        <Card title={"MongoDB"} image={Mongodb} />
        <Card title={"Testing in Java"} image={Testinginjava} />
        <Card title={"Project Case Studies in Java Full Stack Development"} image={Project} />
      </div>
    </div>
  )
}
export default Certification