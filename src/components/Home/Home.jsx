import React from 'react';
import './Home.css';
import {AiOutlineArrowRight,AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Me from '../../img/Snapchat-359832252-removebg-preview.png'
import About from '../About/About';
import Skill from '../Skill/Skill';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div className='h' id='home'>
      <div className='h-main'>
         <div className='h-left'>
            <h2 className='h-title'>Hi There,</h2>
            <h3 className='h-name'>I'm Shubham <h style={{color:'#fe9334'}}>Shrivastwa</h></h3>
            <h5 className='h-desc'>i Am Into <h style={{color:'#b16362'}}>fullstack developer</h></h5>
             <button className="h-hire">
               <h6 className='h-btn'><a className='t-text' href="/contact">Hire Me</a>
               <span><AiOutlineArrowRight/></span></h6>
             </button>

             <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
              <div className='h-social'>
              <a  href='https://www.linkedin.com/in/shubham-shrivastwa-8913a9229'><img className='h-link' src="https://img.icons8.com/ios-filled/2x/linkedin-circled.png" alt="" />
             </a>

             <a  href='https://github.com/Subh31Happy'><img className='h-link' src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/2x/external-github-social-media-tanah-basah-glyph-tanah-basah.png" alt="" />
             </a>

             <a  href='https://twitter.com/TeamShubham_'><img className='h-link' src="https://img.icons8.com/ios-filled/2x/twitter-circled.png" alt="" />
             </a>

             <a  href='https://www.instagram.com/silentknight356/'><img className='h-link' src="https://cdn.iconscout.com/icon/free/png-128/instagram-85-433319.png" alt="" />
             </a>

             <a  href='https://www.youtube.com/@programminggate489/about'><img className='h-link' src="https://cdn.iconscout.com/icon/free/png-128/youtube-66-114609.png" alt="" />
             </a>
              </div>
         </div>

         <div className="h-right ">
           <img className='r-me' src={Me} alt="" />
          
         </div>
         

      </div>
      
      
    </div>
  )
}

export default Home