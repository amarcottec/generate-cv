import React from "react";
import { useState } from "react";

const CompetenceTech = ({ sendCompetence }) => {
  const [competence, setCompetance] = useState({
    compTitle: "",
    compDescription: "",
  });

  const [competences, setCompetences] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompetance({
      ...competence,
      [name]: value,
    });
  };

  const addCompetence = () => {
    setCompetences([...competences, competence]);
    sendCompetence(competence);

    setCompetance({
      compTitle: "",
      compDescription: "",
    });
  };

  return (
    <div>
      <h2>Skills</h2>
      <div>
        <input
          type="text"
          name="compTitle"
          placeholder="Skill Title"
          value={competence.compTitle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="compDescription"
          placeholder="Skill Description"
          value={competence.compDescription}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addCompetence}>Add skill</button>
    </div>
  );
};

export default CompetenceTech;
