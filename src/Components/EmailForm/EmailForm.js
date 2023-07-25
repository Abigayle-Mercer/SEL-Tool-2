import React from "react";
import "./EmailForm.css";

function EmailForm(props) {
    return (
      <form onSubmit={props.sendEmail}>
        <div className="modal">
          <div onClick={props.toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Email Form</h2>
            <div>
              <label className="lab">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label className="lab">Email</label>
              <input type="email" id="user_email" name="user_email" />
            </div>
            <input className="send" type="submit" value="send"></input>
          </div>
        </div>
      </form>
    );
}
export default EmailForm;