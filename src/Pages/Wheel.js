import React from "react";
import { useState } from "react";
import Pie from "../Components/Pie/Pie.js";
import "./Wheel.css";
import "react-quill/dist/quill.snow.css";
import emailjs from "emailjs-com";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReflectionTextBox from "../Components/ReflectionTextBox/ReflectionTextBox.js";
import EmailForm from "../Components/EmailForm/EmailForm.js";
import { AbortedDeferredError } from "react-router-dom";

function Wheel(props) {
  function savePDF(e) {
    e.preventDefault();
    setModal(false);
    // let name = document.getElementById("name").value;
    // let user_email = document.getElementById("user_email").value;
    // let Q1 = document.getElementById("Q1").value;
    // let Q2 = document.getElementById("Q2").value;
    // let Q3 = document.getElementById("Q3").value;
    // let Q4 = document.getElementById("Q4").value;
    // let Q5 = document.getElementById("Q5").value;
    // let Q6 = document.getElementById("Q6").value;
    let DocName = document.getElementById("name").value;

    const totalPageHeight = document.documentElement.scrollHeight;
    const totalPageWidth = document.documentElement.scrollWidth;
    const input = document.getElementById("outermost");
    const input2 = document.getElementById("reflections")
    const pdf = new jsPDF("p", "mm", "a4");

    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
      scrollY: -window.scrollY, // Set scrollY to the top to capture the full page
      scrollX: -window.scrollX,
      windowHeight: totalPageHeight, // Set the canvas height to the total page height
      windowWidth: totalPageWidth,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    });
       html2canvas(input2, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
      scrollY: -window.scrollY, // Set scrollY to the top to capture the full page
      scrollX: -window.scrollX,
      windowHeight: totalPageHeight, // Set the canvas height to the total page height
      windowWidth: totalPageWidth,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${DocName}.pdf`);
    });
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div id="WholePage">
      <div id="pdfContent">
        <div id="outermost" className="outermost">
          <div className="container1">
            <div className="Wrapper">
              <div>
                <p className="l1">Mindset</p>
                <p className="l2">Critical Thinking</p>
              </div>

              <div className="column">
                <p className="t1">Personal Practices Reflection</p>
                <p className="l6">Sensory-Motor Integration</p>
                <Pie id="pie" slices={props.slices} />
                <div className="bottomlabels">
                  <p className="l5">Connection & Identity</p>
                  <p className="l5">Collaboration</p>
                </div>
              </div>

              <div>
                <p className="l3">Insight</p>
                <p className="l4">Regulation</p>
              </div>
            </div>

            <div className="container2">
              <div className="Wrapper">
                <div>
                  <p className="l1">Mindset</p>
                  <p className="l2">Critical Thinking</p>
                </div>

                <div className="column">
                  <p className="t2">Teaching Practifces Reflection</p>
                  <p className="l6">Sensory-Motor Integration</p>
                  <Pie slices={props.slices2} />
                  <div className="bottomlabels">
                    <p className="l5">Connection & Identity</p>
                    <p className="l5">Collaboration</p>
                  </div>
                </div>

                <div>
                  <p className="l3">Insight</p>
                  <p className="l4">Regulation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="reflections" className="reflections">
          <ReflectionTextBox className="reflections"></ReflectionTextBox>
        </div>
      </div>

      <button className="btn-modal" onClick={toggleModal}>
        Want a PDF of your responses?
      </button>
      {/* <button classname="btn-modal" onClick={sendEmail}>
        Want a PDF of your responses?
      </button> */}

      {modal && <EmailForm toggleModal={toggleModal} sendEmail={savePDF} />}
    </div>
  );
}

export default Wheel;
