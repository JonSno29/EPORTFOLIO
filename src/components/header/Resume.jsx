import React from "react";
import JTSCODEuofm from "../../assets/JTS";
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