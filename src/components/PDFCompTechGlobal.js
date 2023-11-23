import React from "react";
import { Text, View, StyleSheet} from "@react-pdf/renderer";
import commonStyles from "./commonStyles";

const PDFCompTechGlobal = (props) => {
  const { compTechGlobal, selectedColor } = props; 
  return (
    <View>
      <Text style={{...commonStyles.title, color: selectedColor, marginTop: 20}}>COMPÉTENCE TECHNIQUES</Text>
      <Text style={{...commonStyles.text, marginBottom: 10}}>{compTechGlobal}</Text>
    </View>
  );
};

export default PDFCompTechGlobal;
