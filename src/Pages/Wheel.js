import React from "react";
import { useState } from "react";
import "./Wheel.css";
import "react-quill/dist/quill.snow.css";
import emailjs from "emailjs-com";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReflectionTextBox from "../Components/ReflectionTextBox/ReflectionTextBox.js";
import EmailForm from "../Components/EmailForm/EmailForm.js";
import Chart from "../Components/Chart/Chart.js";




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
      <div className="wrap">
        <Chart
          slices={props.slices}
          title={"Personal Practices Reflection"}
        ></Chart>
        <Chart
          className="chart2"
          slices={props.slices2}
          title={"Teaching Practices Reflection"}
        ></Chart>
      </div>

      

      <div id="reflections" className="reflections">
        <ReflectionTextBox className="reflections"></ReflectionTextBox>
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
