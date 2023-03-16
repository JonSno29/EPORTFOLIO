import React from "react";
import JTSCODEuofm from "../../assets/JTSCODEuofm.pdf";
import "./resume.css";
const Resume = () => {
  return (
    <div className="Resume">
      <a href={JTSCODEuofm} download className="btn">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;