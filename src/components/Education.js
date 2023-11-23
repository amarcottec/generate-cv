import React from "react";
import { useState } from "react";

const Education = ({ sendEducation }) => {
  const [education, setEducation] = useState({
    schoolName: "",
    degreName: "",
    diplomaName: "",
    startYear: "",
    endYear: "",
    location: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const addEducation = () => {
    sendEducation(education);
    setEducation({
      schoolName: "",
      degreName: "",
      diplomaName: "",
      startYear: "",
      endYear: "",
      location: "",
    });
  };

  return (
    <div>
      <h2>Education:</h2>
      <div>
        <input
          type="text"
          name="schoolName"
          placeholder="School Name:"
          value={education.schoolName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="degreName"
          placeholder="Degree Name:"
          value={education.degreName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="diplomaName"
          placeholder="Diploma Name:"
          value={education.diplomaName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="startYear"
          placeholder="start Year:"
          value={education.startYear}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="endYear"
          placeholder="End Year:"
          value={education.endYear}
          onChange={handleInputChange}
        />
         <input
          type="text"
          name="location"
          placeholder="Location:"
          value={education.location}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addEducation}>Add Education</button>
    </div>
  );
};

export default Education;
