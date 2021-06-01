import React from "react";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div>
      <div class="ui relaxed divided list">
        <div class="item">
          <i class="large github middle aligned icon"></i>
          <div class="content">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
            >
              <a class="header">{name}</a>
              <div class="description">{email}</div>
            </Link>
          </div>

          {/* DELETE MODAL, "ARE YOU SURE U WANT TO DELETE IT?" */}
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
            onClick={() => props.clickHandler(id)}
          ></i>
          <Link
            to={{
              pathname: `/edit`,
              state: { contact: props.contact },
            }}
          >
            <i
              className="edit alternate outline icon"
              style={{ color: "purple", marginTop: "7px" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
