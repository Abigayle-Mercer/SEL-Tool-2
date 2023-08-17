import React from "react";
import "./Prompts.css";
import PromptComponent from "../Components/PromptComponent/PromptComponent.js";
function Prompts(props) {
  return (
    <div>
      <div className="TextBox">
        <p className="Text">
          This digital Social & Emotional Learning Assessment Tool is based on
          Indiana’s seven SEL competencies. The initial prompts for this
          assessment were created by Dr. Brandie Oliver. Using the tool, you
          will be asked to explore SEL knowledge, awareness, and skills in two
          realms of your life: Your personal practices and your teaching
          practices.
          <br></br> 
          <br></br>There are seven meta-competencies that you will assess in
          the realms of your personal life and your life in the classroom. When
          responding to the prompts, you will answer by using a slider that
          represents a continuum between “Strongly Disagree” and “Strongly
          Agree.” At the end of the survey, your responses will help form two
          wheels which will help you see areas of strength and potential areas
          for growth in SEL knowledge, awareness, and skills.
          <br></br><br></br> The tool was
          created for self-reflection and for identifying areas of celebration,
          interest, and needs. If you have any questions, concerns, or ideas for
          the evolution of this tool, please contact Daniel Gallo via email at
          dgallo@lesd.k12.or.us
        </p>
      </div>

      <PromptComponent
        slices1={props.slices1}
        selectScore={props.selectScore}
        slices2={props.slices2}
        selectScore2={props.selectScore2}
      ></PromptComponent>
    </div>
  );
}

export default Prompts;
