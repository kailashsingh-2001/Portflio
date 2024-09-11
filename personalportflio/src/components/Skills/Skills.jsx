import '../Skills/Skills.css'
import React from "react";
const skills = [
  { name: "HTML", image: "https://w7.pngwing.com/pngs/185/866/png-transparent-html-logo-html-web-design-scalable-graphics-world-wide-web-markup-language-html5-icon-hd-miscellaneous-angle-text.png" },
  { name: "CSS", image: "" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "React", image: "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" },
  { name: "Node.js", image: "/images/nodejs.png" },
  { name: "Git", image: "" },
];

const SkillsCircle = () => {
  return (
    <div className="circle-container">
      <div className="circle">
        {skills.map((skill, index) => (
          <div key={index} className="circle-item">
            <img src={skill.image} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCircle;
