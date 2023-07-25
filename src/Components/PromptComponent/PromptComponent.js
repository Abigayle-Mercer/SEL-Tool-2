import React from "react";
import IndividualPrompt from "../IndividualPrompt/IndividualPrompt.js";
import "./PromptComponent.css";
import {useNavigate} from 'react-router-dom';




function PromptComponent(props) {

  const navigate = useNavigate();
  const navigateToWheel = () => {
    navigate('/Wheel');
  }

  const sliceData1 = props.slices1.slice(0, 4);
  const sliceData2 = props.slices1.slice(4, 8);
  const sliceData3 = props.slices1.slice(8, 12);
  const sliceData4 = props.slices1.slice(12, 16);
  const sliceData5 = props.slices1.slice(16, 20);
  const sliceData6 = props.slices1.slice(20, 24);
  const sliceData7 = props.slices1.slice(24, 28);


  const sliceData2_1 = props.slices2.slice(0, 4);
  const sliceData2_2 = props.slices2.slice(4, 8);
  const sliceData2_3 = props.slices2.slice(8, 12);
  const sliceData2_4 = props.slices2.slice(12, 16);
  const sliceData2_5 = props.slices2.slice(16, 20);
  const sliceData2_6 = props.slices2.slice(20, 24);
  const sliceData2_7 = props.slices2.slice(24, 28)

  return (
    <div>
      <div className="QuestionsBlock">
        <ul>
          <div className="groupName">Sensory-Motor Integration</div>
          <IndividualPrompt
            slices={sliceData1}
            selectScore={props.selectScore}
            add={0}
          />
          <IndividualPrompt
            slices={sliceData2_1}
            selectScore={props.selectScore2}
            add={0}
          />
          <div className="groupName">Insight</div>
          <IndividualPrompt
            slices={sliceData2}
            selectScore={props.selectScore}
            add={4}
          />
          <IndividualPrompt
            slices={sliceData2_2}
            selectScore={props.selectScore2}
            add={4}
          />
          <div className="groupName">Regulation</div>
          <IndividualPrompt
            slices={sliceData3}
            selectScore={props.selectScore}
            add={8}
          />
          <IndividualPrompt
            slices={sliceData2_3}
            selectScore={props.selectScore2}
            add={8}
          />
          <div className="groupName">Collaboration</div>
          <IndividualPrompt
            slices={sliceData4}
            selectScore={props.selectScore}
            add={12}
          />
          <IndividualPrompt
            slices={sliceData2_4}
            selectScore={props.selectScore2}
            add={12}
          />
          <div className="groupName">Connection & Identity</div>
          <IndividualPrompt
            slices={sliceData5}
            selectScore={props.selectScore}
            add={16}
          />
          <IndividualPrompt
            slices={sliceData2_5}
            selectScore={props.selectScore2}
            add={16}
          />
          <div className="groupName">Critical Thinking</div>
          <IndividualPrompt
            slices={sliceData6}
            selectScore={props.selectScore}
            add={20}
          />
          <IndividualPrompt
            slices={sliceData2_6}
            selectScore={props.selectScore2}
            add={20}
          />
          <div className="groupName">Mindset</div>
          <IndividualPrompt
            slices={sliceData7}
            selectScore={props.selectScore}
            add={24}
          />
          <IndividualPrompt
            slices={sliceData2_7}
            selectScore={props.selectScore2}
            add={24}
          />
        </ul>
        <div className="button-wrapper">
          <input onClick={navigateToWheel}className="button" type="submit" value="Next" />
        </div>
      </div>
    </div>
  );
}

export default PromptComponent;