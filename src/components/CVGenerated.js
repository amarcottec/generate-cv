import "../App.css";
import { useState } from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PaletteColorPicker from "./PaletteColorPicker ";
import WorkExperience from "./WorkExperience";
import KnowledgeInfo from "./knowledgeInfo";
import CompetenceTech from "./CompetenceTech";
import Education from "./Education";



function CVGenerated(props) {
  const [globalInfo, setglobablInfo] = useState({
    name: "",
    phone: "",
    email: "",
    summary: "",
    compTechGlobal: "",
    selectedColor: "green",
  });

  const [experiences, setExperiences] = useState([]);
  const [knowledges, setKnowledges] = useState([]);
  const [competences, setCompetences] = useState([]);
  const [educations, setEducations] = useState([]);

  // Ajoutez d'autres champs de CV ici

  const handleChange = (e) => {
    const { name, value } = e.target;
    setglobablInfo({ ...globalInfo, [name]: value });
  };

  const updateSelectedColor = (newColor) => {
    setglobablInfo({ ...globalInfo, selectedColor: newColor });
  };

  const handleWorkExperiences = (experiences) => {

    setExperiences(experiences);
  };

  const handleKnowledgeList = (knowledgeList) =>{
    setKnowledges(knowledgeList);
  } 

  const handleCompetenceList = (competenceList) =>{
    
    setCompetences(competenceList);
  } 

   const handleEducations = (educations) =>{
    setEducations(educations);
   }

 
  return (
    <div>
      <h1>Générateur de CV</h1>
      <div className="container">
        <div className="column-left">
          <PaletteColorPicker OnUpdateSelectedColor={updateSelectedColor} />
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            onChange={handleChange}
          />
          <textarea
            name="summary"
            placeholder="Résumé"
            onChange={handleChange}
          />
          <textarea
            name="compTechGlobal"
            placeholder="competemce Techniques Global"
            onChange={handleChange}
          />
          <div>
          <CompetenceTech sendCompetences={handleCompetenceList}/>
          </div>
          <div>
          <KnowledgeInfo sendKnowledgeList={handleKnowledgeList}/>
          </div>
          <div>
            <WorkExperience
              sendExperiences={handleWorkExperiences}
            ></WorkExperience>
          </div>
          <div>
            <Education
              sendEducations={handleEducations}
            ></Education>
          </div>
        </div>
        <div className="columns-right">
          <PDFViewer style={{ height: "100%" }}>
            <PDFFile data={globalInfo} experiences={experiences} knowledges={knowledges} competences={competences} educations={educations}/>
          </PDFViewer>
        </div>
      </div>
      <PDFDownloadLink
       
        document={<PDFFile data={globalInfo} experiences={experiences} knowledges={knowledges} competences={competences} educations={educations}/>}
        fileName="generatedCv"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download")}
      </PDFDownloadLink>
    </div>
  );
}

export default CVGenerated;
