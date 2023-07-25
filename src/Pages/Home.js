import React, { Component } from "react";
import "../App.css";
import Prompts from "./Prompts";
import Wheel from "./Wheel";
import Banner from "../Components/Banner/Banner.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default class Home extends Component {
  state = {
    slices1: [
      {
        question: "I practice mindful breathing regularly",
        title: "SELF ASSESSMENT",
        rotate: "rotate(12.8571, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I recognize the mind-body-emotion connection in my own life.",
        title: "",
        rotate: "rotate(25.7142, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I practice being present and staying in the here and now in my interactions and experiences.",
        title: "",
        rotate: "rotate(38.5713, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I use calming techniques when I notice I am becoming dysregulated.",
        title: "",
        rotate: "rotate(51.4284, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question: "I can identify at least ten of my personal strengths.",
        title: "SELF ASSESSMENT",
        rotate: "rotate(64.2855, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I know how my own beliefs, biases, and values impact the decisions I make.",
        title: "",
        rotate: "rotate(77.1426, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question: "I can identify and name my feelings in the moment. ",
        title: "",
        rotate: "rotate(89.9997, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I can express my feelings in a non-defensive and strength-based way.",
        title: "",
        rotate: "rotate(102.8568, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I use mindful practices to help me cope when I am feeling overwhelmed or dysregulated.",
        title: "SELF ASSESSMET",
        rotate: "rotate(115.7139, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question:
          "I recognize life stressors and apply healthy coping strategies to manage them.",
        title: "",
        rotate: "rotate(128.5710, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question: "I remain calm when under stress. ",
        title: "",
        rotate: "rotate(141.4281, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question: "I talk to a trusted friend/colleague when I need support. ",
        title: "",
        rotate: "rotate(154.2852, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question:
          "I regularly use assertive communication skills when I have conflict with others. ",
        title: "SELF ASSESSMENT ",
        rotate: "rotate(167.1423, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I build relationships with people from all backgrounds, perspectives, and mindsets.",
        title: "",
        rotate: "rotate(179.9994, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I regularly practice empathic communication skills in my discussions/conversations with others.",
        title: "",
        rotate: "rotate(192.8565, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I work well with others, specifically in group work situations or when participating on a team. ",
        title: "",
        rotate: "rotate(205.7136, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question: "I show care and compassion to others.",
        title: "SELF ASSESSMENT ",
        rotate: "rotate(218.5707, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I examine my attitudes and behaviors to determine how they may be contributing to or combating prejudice, privilege, and racism in society.",
        title: "",
        rotate: "rotate(231.4278, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I feel comfortable and confident discussing issues of privilege, prejudice, and racism.",
        title: "",
        rotate: "rotate(244.2849, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I continuously work to increase my awareness, knowledge, and skills in cultural responsiveness and working towards racial justice.",
        title: "",
        rotate: "rotate(257.1420, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I regularly set specific, measurable goals for myself and work towards achieving them.",
        title: "SELF ASSESSMENT ",
        rotate: "rotate(269.9991, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "I apply problem-solving techniques to situations in my life.",
        title: "",
        rotate: "rotate(282.8562, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "When I face a difficult decision, I use a decision-making process to help me make the best decision. ",
        title: "",
        rotate: "rotate(295.7133, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "I consider multiple perspectives and forms of evidence when I am engaged in the problem-solving process.",
        title: "",
        rotate: "rotate(308.5704, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "When I face failure or a mistake, I look for opportunities to learn and grow from it.",
        title: "SELF ASSESSMENT",
        rotate: "rotate(321.4275, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I seek tasks and experiences that challenge me, requiring me to give extra effort.",
        title: "",
        rotate: "rotate(334.2846, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I apply innovative thinking/learning strategies to help in my continued growth and development. ",
        title: "",
        rotate: "rotate(347.1417, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I feel comfortable and confident to give and receive constructive feedback.",
        title: "",
        rotate: "rotate(359.9988, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
    ],

    slices2: [
      {
        question:
          "I support students to help them gain knowledge in recognizing bodily sensations.",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(12.8571, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I regularly implement mindful breathing exercises with my students.",
        title: "",
        rotate: "rotate(25.7142, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question: "I help my students develop mind-body-emotion awareness. ",
        title: "",
        rotate: "rotate(38.5713, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I facilitate the sensory exercises with my students to support transitions and address regulation issues.",
        title: "",
        rotate: "rotate(51.4284, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        question:
          "I facilitate multiple exercises that help students identify and develop personal strengths.",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(64.2855, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I understand how my cultural worldview, privilege(s), and implicit biases affect my teaching practices.",
        title: "",
        rotate: "rotate(77.1426, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I give my students multiple opportunities to practice identifying emotions/feelings.",
        title: "",
        rotate: "rotate(89.9997, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I understand how student responses (both positive and negative) affect my emotions and responses. ",
        title: "",
        rotate: "rotate(102.8568, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        question:
          "I facilitate mindful practices (including brain breaks and focused attention practices) regularly with my students.",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(115.7139, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question: "I implement restorative practices in my classroom.",
        title: "",
        rotate: "rotate(128.5710, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question:
          "I teach and model healthy coping strategies with students to develop stress-management skills.",
        title: "",
        rotate: "rotate(141.4281, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question:
          "My students are provided multiple opportunities to practice taking personal responsibility. ",
        title: "",
        rotate: "rotate(154.2852, 220, 220)",
        fill: "#FF234B",
        transform: "0.01",
      },
      {
        question: "I teach and model using “I statements” with my students.",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(167.1423, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I teach health conflict-management skills and strategies to my students.",
        title: "",
        rotate: "rotate(179.9994, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I teach my students how to work in groups and provide multiple opportunities to engage in group work.",
        title: "",
        rotate: "rotate(192.8565, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I implement a democratic process where students co-construct our classroom agreements and norms. ",
        title: "",
        rotate: "rotate(205.7136, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        question:
          "I regularly engage in open discussions about prejudice, bias, and stereotypes with my students. ",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(218.5707, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I teach and model empathic communication skills with my students.",
        title: "",
        rotate: "rotate(231.4278, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I integrate culturally responsive and racial justice literature in my teaching practices. ",
        title: "",
        rotate: "rotate(244.2849, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question:
          "I provide multiple opportunities for students to connect their cultural/racial identity and worldview to their academic/learning goals. ",
        title: "",
        rotate: "rotate(257.1420, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        question: "I teach my students to set individual learning goals.",
        title: "TEACHING PRACTICES ASSESSMENT",
        rotate: "rotate(269.9991, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "I use entry/exit tickets (and other reflective strategies) to help my students self-assess their growth and learning. ",
        title: "",
        rotate: "rotate(282.8562, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "I provide multiple opportunities for students to practice decision-making skills.",
        title: "",
        rotate: "rotate(295.7133, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question:
          "I teach my students how to apply problem-solving techniques, which include seeking input from multiple perspectives.  ",
        title: "",
        rotate: "rotate(308.5704, 220, 220)",
        fill: "#00AB3A",
        transform: "0.01",
      },
      {
        question: "I use process praise regularly with my students. ",
        title: "TEACHING PRACTICES ASSESSMENT ",
        rotate: "rotate(321.4275, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I teach my students about neuroplasticity, emphasizing how their brains develop through effort and intentional practice.",
        title: "",
        rotate: "rotate(334.2846, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I teach, model, and provide multiple opportunities for students to practice giving and receiving constructive feedback.",
        title: "",
        rotate: "rotate(347.1417, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        question:
          "I provide multiple opportunities for my students to learn from their mistakes and challenges. ",
        title: "",
        rotate: "rotate(359.9988, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
    ],
  };

  selectScore = (question) => (e) => {
    let targetValue = parseInt(e.target.value) / 100;
    if (targetValue === 1) {
      targetValue = 1.0;
    }
    const newState = { ...this.state };
    newState.slices1[question].transform = targetValue.toString();
    this.setState(newState);
  };

  selectScore2 = (question) => (e) => {
    let targetValue = parseInt(e.target.value) / 100;
    if (targetValue === 1) {
      targetValue = 1.0;
    }
    const newState = { ...this.state };
    newState.slices2[question].transform = targetValue.toString();
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Banner t1={"Prompts"} t2={"SEL Wheel"}></Banner>
              <Routes>
                <Route
                  path="/Prompts"
                  element={
                    <Prompts
                      slices1={this.state.slices1}
                      selectScore={this.selectScore}
                      slices2={this.state.slices2}
                      selectScore2={this.selectScore2}
                    />
                  }
                />
              </Routes>
              <Routes>
                <Route
                  path="/Wheel"
                  element={
                    <Wheel
                      slices={this.state.slices1}
                      slices2={this.state.slices2}
                    />
                  }
                />
              </Routes>
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
