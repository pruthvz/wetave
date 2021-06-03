import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function ContactList(props) {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="dark:bg-gray-700 h-screen overflow-y-auto overflow-x-hidden pb-10">
      <div>
        <div class="container flex text-center">
          <div class="relative">
            <div class="absolute top-4 left-3">
              <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
            </div>
            <input
              ref={inputEl}
              type="text"
              placeholder="Search contacts.."
              value={props.term}
              onChange={getSearchTerm}
              class="h-14 w-screen pr-10 pl-10  z-0 shadow focus:shadow focus:outline-none focus:ring-1 focus:ring-gray-600 dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
        </div>
      </div>
      <br />

      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
}

export default ContactList;
