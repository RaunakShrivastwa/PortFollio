import React from "react";
import "./Skill.css";
import Me from "../../img/IMG_20221128_173325-removebg-preview.png";
import marn from "../../img/marn-removebg-preview.png";
import {GiEmbrassedEnergy} from 'react-icons/gi'
import Contact from "../Contact/Contact";


function Skill() {
  return (
    <div className="s" id="skill">
      <div className="s-top">
        <div className="h-miniImg">
          <img src={Me} alt="" className="h-img" />
        </div>
        <div className="s-title">
            <div className="s-title-wrapper">
              <div className="s-title-item">MY Skills<GiEmbrassedEnergy/> </div>
              <div className="s-title-item">MY Skills<GiEmbrassedEnergy/></div>
              <div className="s-title-item">MY Skills<GiEmbrassedEnergy/></div>
              <div className="s-title-item">MY Skills<GiEmbrassedEnergy/></div>
              <div className="s-title-item">MY Skills<GiEmbrassedEnergy/></div>
            </div>
          </div>
      </div>
      <div className="s-skill">
        <div className="s-java">
          <div className="s-injava">
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/java-60-1174953.png"
              alt=""
              className="s-jimg"
            />
          </div>
          <div className="s-textjavaCenter">
            <h1 className="s-javatitle">
              <u>JAVA</u>
            </h1>
            <p className="s-javaContent">1. Core Java(java7/java8)</p>
            <p className="s-javaContent">2. Advance Java</p>

            <p className="s-javaContent">3. Spring Framework</p>
            <p className="s-javaContent">4. Spring Boot Framework</p>
            <p className="s-javaContent">5. Hibernate Framework</p>
            <p className="s-javaContent">6. Java Server pages(JSP)</p>
          </div>
        </div>

        <div className="s-marn">
          <div className="s-inmarn">
            <img src={marn} alt="" className="s-mimg" />
          </div>
          <div className="s-textjavaCenter">
            <h1 className="s-javatitle">
              <u>MERN</u>
            </h1>
            <p className="s-javaContent">1. M- Mongodb</p>
            <p className="s-javaContent">2. E- Express</p>

            <p className="s-javaContent">3. R- React js</p>
            <p className="s-javaContent">4. N- Node js</p>
          </div>
        </div>

        <div className="s-ds">
          <div className="s-inds">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/data-structure-1861576-1578307.png"
              alt=""
              className="s-dsimg"
            />
          </div>
          <div className="s-textjavaCenter">
            <h1 className="s-javatitle">
              <u>Data Structure</u>
            </h1>
            <p className="s-javaContent">
              In computer science, a data structure is a data organization,
              management, and storage format that is usually chosen for
              efficient access to data
            </p>
          </div>
        </div>

        <div className="s-ui">
          <div className="s-inui">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVB87V0MfjSSY_3EEECo693MxAWK-gHTQADsKiMn4RULDZbfMBRkGX2va0QO4LOv1A2l0&usqp=CAU"
              alt=""
              className="s-uimg"
            />
          </div>
          <div className="s-textjavaCenter">
            <h1 className="s-javatitle">
              <u>UI/UX</u>
            </h1>
            <p>
              User interface design or user interface engineering is the design
              of user interfaces for machines and software, such as computers,
            </p>
            <p className="s-javaContent">1. Html</p>
            <p className="s-javaContent">2. Css</p>
            <p className="s-javaContent">3. Java Script</p>
            <p className="s-javaContent">4. Bootstrap</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Skill;
