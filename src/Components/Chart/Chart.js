import React from "react";
import Pie from "../Pie/Pie";
import "./Chart.css";

function Chart(props) {
    return (
      <div className="Wrapper">
        <div className="container1">
          <div className="leftlabels">
            <p className="l1">Mindset</p>
            <p className="l2">Critical Thinking</p>
          </div>

          <div className="column">
            <p className="t1">{props.title}</p>
            <p className="l6">Sensory-Motor Integration</p>
            <Pie id="pie" slices={props.slices} />
            <div className="bottomlabels">
              <div className="l5">Connection & Identity</div>
              <div className="l5">Collaboration</div>
            </div>
          </div>

          <div className="leftlabels">
            <p className="l3">Insight</p>
            <p className="l4">Regulation</p>
          </div>
        </div>
      </div>
    );
}

export default Chart;
