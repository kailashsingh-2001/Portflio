import React from "react";
import { motion } from "framer-motion";
import "../Education/Education.css";

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Jodhpur Institute of Engineering and Technology.",
    year: "2024-present",
    description: "Focused on advanced computer science topics, including software development, database management, and system architecture.",
  },
  {
    degree: "Bachelor of Arts (BA)",
    institution: "University Of Rajasthan",
    year: "2020 - 2024",
    description: "Graduated with honors in Economics and statistics.",
  },
  // Add more educational experiences here
];

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <motion.div
            className="education-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
