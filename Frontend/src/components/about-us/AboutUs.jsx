
import './AboutUs.css';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const teamMembers = [
    { id: 1, name: 'Nakul ', git:"https://github.com/NakulKataria", Linkedin:"https://www.linkedin.com/in/nakulkataria05/", mail:"mailto:nakulkofficial@gmail.com"},
    { id: 2, name: 'Rishit', git:"https://github.com/RENCHIO24", Linkedin:"https://www.linkedin.com/in/rishit-rastogi-73b6a22a6", mail:"mailto:rishrishit@gmail.com"},
    { id: 3, name: 'Shubham', git:"https://github.com/onceagainarise", Linkedin:"https://www.linkedin.com/in/shubham-3793a9257/ ", mail:"mailto:mrflame5883@gmail.com"},
    { id: 4, name: 'Vivek', git:"https://github.com/vivekkumar1522", Linkedin:"https://www.linkedin.com/in/vivek-kumar-a143232b5", mail:"mailto:unitevivek9999@gmail.com "},
  ];

const AboutUs = () => {
  

   return (
    <div className='footer'id="AboutUs" >
      <div>
        <h2 class="team-name">Arise</h2>
        <h1 class="aboutus-heading">Our Team</h1>
      </div>
      <div className="card-container">
        {teamMembers.map((item, index) => (
        <div className="card" key={index}>
          <h3 className='names'>{item.name}</h3>
          <div className="icons">
            <div>
              <a
                href={item.git}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={40}/>
              </a>
              <a
                href={item.Linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin  size={40}/>
              </a>
              <a
                href={item.mail}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMailUnread  size={40} />
              </a>
            </div>
          </div>
        
        </div>
        ))}
      </div>
    </div>
  );

};

export default AboutUs;

