import React from "react";
import { useState } from "react";

const KnowledgeInfo = ({ sendKnowledgeList }) => {
  const [kowledgeList, setKnowledgeList] = useState([
    { knowledgeTitle: "", KnowledgeDetail: "" },
  ]);

  const handleAddKnowledge = () => {
    setKnowledgeList([
      ...kowledgeList,
      { knowledgeTitle: "", KnowledgeDetail: "" },
    ]);
  };

  const handleKnowledgeChange = (index, field, value) => {
    const newKnowledgeList = [...kowledgeList];
    newKnowledgeList[index][field] = value;
    setKnowledgeList(newKnowledgeList);
    sendKnowledgeList(newKnowledgeList);
  };

  const handleRemoveKnowledge = (index) => {
    const newKnowledgeList = [...kowledgeList];
    newKnowledgeList.splice(index, 1);
    setKnowledgeList(newKnowledgeList);
    sendKnowledgeList(newKnowledgeList);
  };

  return (
    <div>
      <h2>Connaissances Informatique</h2>

      {kowledgeList &&
        kowledgeList.map((knowlege, index) => (
          <div key={index}>
            <input
              type="text"
              name="knowledgeTitle"
              placeholder="Knowledge Title"
              value={knowlege.knowledgeTitle}
              onChange={(e) =>
                handleKnowledgeChange(index, "knowledgeTitle", e.target.value)
              }
            />
            <input
              type="text"
              name="KnowledgeDetail"
              placeholder="Knowledge Detail"
              value={knowlege.KnowledgeDetail}
              onChange={(e) =>
                handleKnowledgeChange(index, "KnowledgeDetail", e.target.value)
              }
            />
            <button onClick={() => handleRemoveKnowledge(index)}>-</button>
          </div>
        ))}
      <button onClick={handleAddKnowledge}>Add Knowledge</button>
    </div>
  );
};

export default KnowledgeInfo;
