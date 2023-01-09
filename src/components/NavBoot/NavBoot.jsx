import React from "react";
import "./NavBoot.css";
import Typical from "react-typical";
import {Link} from 'react-router-dom'
import {FcHome} from 'react-icons/fc';
import {FcAbout,FcBusinessContact} from 'react-icons/fc';
import {GiSkills} from 'react-icons/gi'
import {FaSchool} from 'react-icons/fa'
import {GrWorkshop} from 'react-icons/gr'
import {BsFileCode} from 'react-icons/bs'


function NavBoot() {
  const onclickbtn=()=>{
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
  }
  return (
    
    <div>
      <nav class="navbar">
        <div class="brand-title">
        <Typical
            
                  loop={Infinity}
                  steps={[
                    "Shubham Shrivastwa 😀",
                    "FullStack Developer💻",
                    "Smart In Coding 💻🖥",
                    "Problem Solver 🤗",
                    "Data Analysis ✍",
                  ]}
                />
        </div>
        <a href="#" class="toggle-button" onClick={onclickbtn}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        
        </a>
        <div class="navbar-links">
          <ul>
            <li>
              <Link to="/"><FcHome/>Home</Link>
            </li>
            <li>
              <Link to="/about"><FcAbout/>About</Link>
            </li>
            <li>
              <Link to="/skill"><GiSkills/>Skill</Link>
            </li>
            <li>
              <Link to="/work"><GrWorkshop/>Projects</Link>
            </li>
           
            <li>
              <Link to="/contact"><FcBusinessContact/>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBoot;
