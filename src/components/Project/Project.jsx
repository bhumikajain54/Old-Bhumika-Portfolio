import './Project.css';
import Card from '../Card/Card'; // Import the Card component
import MISInvoicing from '../../assets/CODEB.png';
import ZigCab from '../../assets/zigcabio.png';
import EmployeeManagement from '../../assets/employee.png';
import InsuranceBroker from '../../assets/MIS_Project.png';
import NewspaperPage from '../../assets/newspaper.png';
import VegetableShopping from '../../assets/vegetable.png';
import SanitaryWare from '../../assets/sanitaryware.png';
import PankhurisCakes from '../../assets/pankhuri.png';
import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
function Project() {
  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    })
     gsap.from(".slider",{
      y:100,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    })
  })
  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCE IN PROJECTS</h1>
      <div className="slider">
        <Card title={"MIS and Invoicing System"} image={MISInvoicing}/>
        <Card title={"ZigCab, B2D (Born-2-Dance)"} image={ZigCab}/>
        <Card title={"Employee Management System"} image={EmployeeManagement}/>
        <Card title={"Insurance Broker MIS"} image={InsuranceBroker}/>
        <Card title={"Newspaper Page"} image={NewspaperPage}/> 
         <Card title={"Vegetable Shopping Website"} image={VegetableShopping}/>
        <Card title={"Sanitary Ware E-Commerce Platform"} image={SanitaryWare}/>
        <Card title={"Pankhuri's Cakes & Kitchen"} image={PankhurisCakes}/> 
      </div>
    </div>
  )
}

export default Project
 

