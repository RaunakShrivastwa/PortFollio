import "./About.css";
import Award from "../../img/Snapchat-1005790297-edit-20221123144030.jpg";
import Pic from '../../img/certificates.png'
import {SiHackerrank} from 'react-icons/si'
import {ImCloudDownload} from 'react-icons/im'
import Skill from "../Skill/Skill";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Award}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right"> 
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Well,  I'm Shubham Shrivastwa and guy's I'm FullStack Developer.
          always be motivate.. 
        </p>
        <p className="a-desc">
         Basically i am from Bihar(Patna). and pass out from BCA in 2022 from  the LND College Motiharti Biahr.
         i have been taken all 75% above marks in BCA Every Semester.
         i has learned some languages like c,c++,java(Advanced) with its framework as well MARN ,stands for
         Mongodb Angular React js and Node js and so on ....
         now a days i m doing frilancing and build lot of projects like:- <a href="https://quickchat420.herokuapp.com/">Chatting Application</a>,
         <a href="https://college-project-boot.herokuapp.com/">College Application</a>
         
        </p>
        <div className="a-award">
          <a href="https://www.hackerrank.com/certificates/iframe/0c7c34faf97d"><img src={Pic} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title"><a href="https://www.hackerrank.com/certificates/iframe/0c7c34faf97d"><SiHackerrank/></a>HackerRank Certificates 2021</h4>
            <p className="a-award-desc">
               i solved maximum questions at hackerank through java and c..
               and includes its data structure from scratch.
               i solved also Algorithmic problems.
            </p>
          </div>
        </div>
      </div>
      <button className="a-resume" onClick={()=>{
        
          // using Java Script method to get PDF file
          fetch('ShubhamCV (4).pdf').then(response => {
              response.blob().then(blob => {
                  // Creating new object of PDF file
                  const fileURL = window.URL.createObjectURL(blob);
                  // Setting various property values
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'ShubhamSri.pdf';
                  alink.click();
              })
          })
      
      }}>Download Cv<ImCloudDownload/></button>
      
    </div>
  );
};

export default About;