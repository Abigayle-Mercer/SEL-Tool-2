import React from "react";
import "./EmailForm.css";

function EmailForm(props) {
    return (
      <form onSubmit={props.sendEmail}>
        <div className="modal">
          <div onClick={props.toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Save as PDF</h3>

            <div className="name">
              <label className="lab">File Name: </label>
              <input classname="in" type="text" id="name" name="name" />
            </div>
            <div className="name">
              <label className="lab">Current Date: </label>
              <input classname="in" type="text" id="date" name="date" />
            </div>

            <input className="send" type="submit" value="Save"></input>
          </div>
        </div>
      </form>
    );
}
export default EmailForm;