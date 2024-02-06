import React from "react";
import "./languages.css";
import useDetectScroll from "@smakss/react-scroll-direction";

const Languages = () => {
  const scrollDir = useDetectScroll({});

  if (scrollDir === "down") {
    document.getElementById("skills").classList.add("slide-in-bck-left");
  }

  return (
    <div className="expertise" id="skills">
      <h2>Skills</h2>
      <div className="card-group">
        <div className="front-end-development">
          <div className="front-end-development_header">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height={50}/>
            Front End Development
          </div>
          <a className="text">Experienced in UI/UX. Proven through 2 years of experience in HTML, CSS, JS and React.</a>
        </div>
        <div className="back-end-development">
            <div className="back-end-development_header">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" height={50} width={50}/>
              Back End Development
            </div>
            <a className="text">Skilled in OOP and functional programming: Python, Java, Javascript.</a>
          </div>
          <div className="data-analysis">
          <div className="data-analysis_header">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height={50} className="python-logo"/>
              Data Analysis
            </div>
            <a className="text">Proficient in data analysis in R and Python, particularly with the Panda library.</a>
          </div>
        </div>
      </div>
  );
};

export default Languages;
