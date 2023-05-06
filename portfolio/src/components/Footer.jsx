import React, { useState } from "react";
import twitter from "../imgs/twitter.png"
import linkedin from "../imgs/linkedIn.png"
import github from "../imgs/gh.png"
import "./styles/Footer.css"


export default function Footer(){
  const handleLinkedInClick = () => {
  
      window.location.href = "https://www.linkedin.com/in/matthew-garcia-224410262/"; // Replace with the actual LinkedIn URL
    
  };
  const handleTwitterClick = () => {
  
    window.location.href = "https://twitter.com/matthew72394770"; // Replace with the actual LinkedIn URL
  
};
const handleGithubClick = () => {
  
  window.location.href = "https://github.com/heav3n21."; // Replace with the actual LinkedIn URL

};
    return(
        <footer>
      <img src={github} onClick={handleGithubClick}/>
      <img src={twitter} onClick={handleTwitterClick} />
      <img src={linkedin} onClick={handleLinkedInClick} />
        </footer>
    )

}