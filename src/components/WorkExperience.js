import React, { useState } from "react";

const WorkExperience = ({ sendExperience }) => {
  const [experience, setExperience] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    tasksDescriptions: [""],
    techEnvironment: "",
  });

  const [experiences, setExperiences] = useState([]);

  const addExperience = () => {
    setExperiences([...experiences, experience]);
    sendExperience(experience);
    setExperience({
      jobTitle: "",
      companyName: "",
      location: "",
      startDate: "",
      endDate: "",
      tasksDescriptions: [""],
      techEnvironment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...experience.tasksDescriptions];
    updatedTasks[index] = value;
    setExperience({ ...experience, tasksDescriptions: updatedTasks });
  };

  const handleAddTask = () => {
    setExperience({
      ...experience,
      tasksDescriptions: [...experience.tasksDescriptions, ""],
    });
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = experience.tasksDescriptions.filter(
      (_, i) => i !== index
    );
    setExperience({ ...experience, tasksDescriptions: updatedTasks });
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <div>
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={experience.jobTitle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          value={experience.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="companyName"
          placeholder="company Name"
          value={experience.companyName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          value={experience.startDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          value={experience.endDate}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>+</button>
        {experience.tasksDescriptions.map((task, index) => (
          <div key={index} style={{display: 'flex', alignItems: 'center'}}>
            <input
              type="text"
              value={task}
              placeholder="Task Description"
              onChange={(e) => handleTaskChange(index, e.target.value)}
            />
            <button onClick={() => handleRemoveTask(index)}>-</button>
          </div>
        ))}

        <input
          type="text"
          name="techEnvironment"
          placeholder="technicaL Environment"
          value={experience.techEnvironment}
          onChange={handleInputChange}
        />

        <button onClick={addExperience}>Add Experience</button>
      </div>
    </div>
  );
};

export default WorkExperience;