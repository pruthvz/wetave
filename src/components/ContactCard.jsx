import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/userprofile.jpg";

function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div>
      <div class="container mx-auto max-w-screen flex flex-col space-y-4 justify-center items-center pt-2">
        <div class="bg-gray-300 dark:bg-gray-900 w-7/12 flex items-center p-2 rounded-xl shadow hover:bg-gray-500 dark:hover:bg-gray-800  transition duration-200 group">
          <div class="relative flex items-center space-x-4">
            <img
              src={profilePic}
              alt="My profile"
              class="w-16 h-16 rounded-full"
            />
            <span class="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white"></span>
          </div>

          <div class="flex-grow p-3">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
            >
              <div class="font-semibold text-gray-900 dark:text-gray-200 group-hover:text-gray-100 ">
                {name}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-300 group-hover:text-gray-200">
                {email}
              </div>
            </Link>
          </div>
          <div class="p-2">
            {/* create delete modal here */}
            <i
              className="trash icon text-red-600 cursor-pointer transform hover:scale-125 transition duration-300"
              onClick={() => props.clickHandler(id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
