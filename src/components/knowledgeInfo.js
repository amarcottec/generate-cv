import React from "react";
import { useState } from "react";


const KnowledgeInfo = ({ sendKnowledgeInfo }) => {
  const [knowledgeInfo, setKnowledgeInfo] = useState({
    knowledgeTitle: "",
    KnowledgeList: "",
  });

  const [kowledgeList, setKnowledgeList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKnowledgeInfo({
      ...knowledgeInfo,
      [name]: value,
    });
  };

  const addKnowledge = () => {
    setKnowledgeList([...kowledgeList, knowledgeInfo]);
    sendKnowledgeInfo(knowledgeInfo);

    setKnowledgeInfo({
      knowledgeTitle: "",
      KnowledgeList: "",
    });
  };

  return (
    <div>
      <h2>Connaissances Informatique</h2>

      <div>
        <input
          type="text"
          name="knowledgeTitle"
          placeholder="Knowledge Title"
          value={knowledgeInfo.knowledgeTitle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="KnowledgeList"
          placeholder="Knowledge List"
          value={knowledgeInfo.KnowledgeList}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addKnowledge}>Add Knowledge</button>
    </div>
  );
};

export default KnowledgeInfo;
