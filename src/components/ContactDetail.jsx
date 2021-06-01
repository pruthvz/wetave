import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

function ContactDetail(props) {
  const { name, email } = props.location.state.contact;

  return (
    <div className="main" style={{ paddingTop: "75px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <center>
          <Link to="/">
            <button className="ui button purple">Back to Contacts</button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default ContactDetail;
