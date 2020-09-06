import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";
import './paper.css';

function EducationP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h5 style={{borderBottom: "solid 2px", marginTop: "5px", paddingBottom: "5px"}}>
        <strong>Education</strong>
      </h5>
    );
  }

  let bulletEducation1;
  let bulletEducation11;

  if (!contentUse.education.additional) {
    bulletEducation1 = "";
  } else {
    bulletEducation1 = (
        <li>{contentUse.education.additional}</li>
    );
  }
  // if (!contentUse.education.additional1) {
  //   bulletEducation11 = "";
  // } else {
  //   bulletEducation11 = (
  //       <li>{contentUse.education.additional1}</li>
  //   );
  // }

  return (
    <div className={classes.professionalResume}>
      <div >
        {title}
        <p style={{float: "right", fontWeight: "700"}}>
        {contentUse.education.city}
      </p>
        <p >
          <strong>{contentUse.education.institution} </strong>{" "}
          </p>
          <p style={{float: "right", fontStyle: "italic" }}>
          {contentUse.education.gradYear}
          </p>
        <p style={{ fontStyle: "italic" }}>
          {contentUse.education.major} 
          </p>
        {bulletEducation1}
        {bulletEducation11}
      </div>



    </div>
  );
}

export default EducationP;
