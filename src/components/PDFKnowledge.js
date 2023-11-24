import React from "react";
import { Text, View} from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFKnowledge = (props) => {
  const { knowledges, selectedColor } = props;

  return (
    <View>
      <Text style={{...commonStyles.title, color: selectedColor}}>CONNAISSANCES INFORMATIQUE</Text>
      {knowledges.map((knowledge, index) => (
        <View key={index} style={commonStyles.textParaphaph}>
          <Text style={commonStyles.textBold}>{knowledge.knowledgeTitle}:</Text>
          <Text style={commonStyles.text}>{knowledge.KnowledgeList}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFKnowledge;
